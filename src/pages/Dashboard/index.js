import React, { useState, useContext, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { Colors, Typography, Form } from '@/styles'
import { FirebaseContext } from '../../firebaseContext'
import './styles.css'
import { Cancel, EditInput, ProfileLeft, ProfileRight, Column, Text, Row, Label, Data, Class, ClassText, Sections } from './styles.js'
import $ from 'jquery'
import ReactDOMServer from 'react-dom/server'

import WavyPurple from '../About/assets/wavy_purple.svg'

var namify = function (course) { // please change this later lol
  var teacher1 = course.teacher1Name
  var teacher2 = course.teacher2Name
  var teacher3 = course.teacher3Name

  var result = teacher1
  if (teacher2 != '') {
    result += ', ' + teacher2
  }
  if (teacher3 != '') {
    result += ', ' + teacher3
  }
  return result
}

const withdraw = (student, course, db) => {
  if (window.confirm('Are you sure you want to drop "' + course.courseTitle + '"?')) {
    db.collection('courseAssignments').doc(course.assignmentID).delete().then(function () {
      console.log('adding to deleted')
      db.collection('deleteAssignments')
        .add({
          courseID: course.id,
          studentID: student.id,
          waitlisted: course.waitlisted
        })
        .then(window.location.reload())
    })
  } else {
    // phew
  }
}

var genFrag = function (label, data) {
  return {
    label: label,
    data: data
  }
}

var fragHtml = function (info, edit) {
  return (
    <Row>
      <ProfileLeft>
        <Label>{`${info.label} `}</Label>
      </ProfileLeft>
      <ProfileRight>
        {/* <Data edit={edit}> */}
        {/* {!edit && <p style={{ margin: 5 }}>{`${info.data} `}</p>} */}
        <EditInput edit={edit} disabled={!edit} value={info.data}/>
        {/* </Data> */}
      </ProfileRight>
    </Row>
  )
}

var genEdit = function (info) {
  return (<p className="profile-item-edit"><b><span className="label">{info.label}</span>: </b> <input className="edit-field" type="text" value={info.data} /><button type="button">Submit</button></p>)
}

var generateStudentInfo = function (student) {
  var studentName = student.name
  if (typeof studentName === 'undefined') {
    studentName = student.name_first + ' ' + student.name_last
  }
  return [
    genFrag('Name', studentName),
    genFrag('Email', student.email),
    genFrag('Parent Name', student.parentName),
    genFrag('Parent Email', student.parentEmail),
    genFrag('Age', student.age),
    genFrag('School', student.school),
    genFrag('Country', student.country),
    genFrag('City', student.city)
  ]
}

var changing = function (label, data, student) {
  var result = student
  var fieldName = 'nothing'
  if (label === 'Name') {
    fieldName = 'name'
  } else if (label === 'Email') {
    fieldName = 'email'
  } else if (label === 'Parent Name') {
    fieldName = 'parentName'
  } else if (label === 'Parent Email') {
    fieldName = 'parentEmail'
  } else if (label === 'School') {
    fieldName = 'school'
  }
  result[fieldName] = data
  return result
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState(null)
  const [student, setStudent] = useState(null)
  const [theError, setTheError] = useState(null)
  const [courses, setCourses] = useState([])
  const [coursesDisplayed, setCoursesDisplayed] = useState([])
  const { db, storage, auth } = useContext(FirebaseContext)
  const [wave, setWave] = useState('4')
  const [edit, toggleEdit] = useState(false)

  useEffect(() => {
    if (db && auth) {
      // console.log("call " + calledOnce);
      auth.onAuthStateChanged(function (theUser) {
        if (theUser) {
          // console.log(result.user.uid);

          setUser(theUser)
          db.collection('StudentRegistrations').where('userID', '==', theUser.uid).get().then(function (snapshot) {
            var students = []

            snapshot.forEach(function (snap) {
              students.push(snap)
            })
            if (students.length > 0) {
              var coursesResult = []
              setStudent(students[0].data())
              var theStudent = students[0].data()
              db.collection('courseAssignments').where('studentID', '==', theStudent.id).get().then(function (assignments) {
                var currentlyCounted = 0
                var courseData = []
                assignments.forEach(function (snap) {
                  courseData.push({ data: snap.data(), id: snap.id })
                })
                var numCourses = courseData.length
                if (numCourses >= 0) {
                  setLoading(false)
                }
                var currentNum = 0
                courseData.forEach((course, i) => {
                  const current = course
                  const courseId = current.data.courseID
                  db.collection('fl_content').where('id', '==', courseId).get().then(function (snapshot) {
                    var isWaitlisted = current.data.waitlisted
                    currentNum++
                    var courses = []
                    snapshot.forEach(function (snap) {
                      courses.push(snap)
                    })
                    var toPush = courses[0].data()
                    db.doc(toPush.picture[0].path).get().then(function (picture) {
                      storage.child('flamelink/media/' + picture.data().file).getDownloadURL()
                        .then(function (url) {
                          toPush.waitlisted = isWaitlisted
                          toPush.imageUrl = url
                          toPush.assignmentID = current.id
                          coursesResult.push(toPush)
                          if (numCourses == currentNum) {
                            setCourses(coursesResult)
                            setCoursesDisplayed(coursesResult.filter(course => {
                              for (let i = 0; i < courses.length; i++) {
                                if (course.wave.includes(wave)) {
                                  return true
                                }
                              }
                              return false
                            }))
                            setLoading(false)
                          }
                        })
                    })
                  })
                })
                console.log(courses)
              })
            }
          })
        } else {
          window.location.href = '/sign-in'
        }
      })
    }
  }, [db, storage, auth])

  useEffect(() => {
    setCoursesDisplayed(courses.filter(course => {
      for (let i = 0; i < courses.length; i++) {
        if (course.wave.includes(wave)) {
          return true
        }
      }
      return false
    }))
  }, [wave])

  if (isError) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <p>Error. Code: {theError.code}</p>
            <p>Error Message: {theError.message}</p>
          </ContainerInner>
        </Container>

        <Footer/>
      </>)
  }

  if (loading) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <p>Loading database...</p>
          </ContainerInner>
        </Container>

        <Footer/>
      </>)
  }

  if (!user) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <p>Not signed in.</p>
          </ContainerInner>
        </Container>

        <Footer/>
      </>)
  }

  var inputChanged = function (setWave) {
    var result = (event) => {
      var value = event.target.value
      setWave(prevData => {
        var result = { ...prevData }
        result = value
        return result
      })
    }
    return result
  }

  var WAVE_OPTIONS = [
    4/*,
    3,
    2,
    1 */
  ]

  if (student) {
    var studentInfo = generateStudentInfo(student)

    // $(document).ready(function () {
    //   // document.getElementById("wave").dispatchEvent(new Event("change", {bubbles: true}));
    //   $(document).on('click', '.profile-item button', function (e) {
    //     var label = $(this).parent().find('.label').html()
    //     var data = $(this).parent().find('.data').html()
    //     $(this).parent().after(ReactDOMServer.renderToString(genEdit({ label: label, data: data })))
    //     var editing = $(this).parent().next()
    //     // console.log(editing.find("*"));
    //     editing.find('.edit-field').focus()
    //     editing.find('.edit-field').select()
    //     $(this).parent().remove()
    //   })
    //   $(document).on('click', '.profile-item-edit button', function (e) {
    //     var label = $(this).parent().find('.label').html()
    //     var newData = $(this).parent().find('.edit-field').val()
    //     var change = changing(label, newData, student)
    //     // console.log(change);
    //     db.doc('StudentRegistrations/' + student.id).set(change)
    //     $(this).parent().after(ReactDOMServer.renderToString(fragHtml({ label: label, data: newData })))
    //     $(this).parent().remove()
    //   })
    //   // console.log("hi");
    // })

    return (<>
      <div>
        <Navbar/>
        <Container>
          <ContainerInner>
            <Sections>
              <Column>
                <Typography.Header style={{ color: Colors.WLF_PURPLE }}>My Profile</Typography.Header>
                <div style={{
                  backgroundImage: `url(${WavyPurple})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  marginBottom: 5,
                  paddingBottom: '20px'
                }}>
                  <Text>
                    <br/><br/>
                    {studentInfo.map((info) => fragHtml(info, edit))}
                    <br/>
                  </Text>
                  {edit && <Row style={{ alignItems: 'center' }}>
                    <Form.Button onClick={() => toggleEdit(!edit)} style={{ marginTop: 0, marginRight: 20, marginLeft: 20, width: 100, textAlign: 'center', fontSize: 18 }}>
                      <b style ={{ color: 'white' }}>Submit</b>
                    </Form.Button>
                    <Cancel style ={{ color: 'white' }}>Cancel</Cancel>
                  </Row>}
                </div>
                <Row>
                  <a href="/sign-out" style={{ textDecoration: 'none', color: 'white', float: 'left' }}>
                    <Form.Button style={{ margin: 5, width: 125, textAlign: 'center', fontSize: 18 }}>
                      <b>Sign Out</b>
                    </Form.Button>
                  </a>
                  <a href="/change-password" style={{ textDecoration: 'none', color: 'white', float: 'right' }}>
                    <Form.Button style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                      <b>Change Password</b>
                    </Form.Button>
                  </a>
                  <Form.Button onClick={() => toggleEdit(!edit)} style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                    <b style ={{ color: 'white' }}>Edit Profile</b>
                  </Form.Button>
                </Row>
              </Column>
              <Column>
                <div style={{ display: 'flex' }}>
                  <Column style={{ width: '70%' }}>
                    <Typography.Header style={{ color: Colors.WLF_PURPLE }}>My Classes</Typography.Header>
                  </Column>
                  <Column style={{ width: '30%' }}>
                    <Form.Dropdown
                      onChange={inputChanged(setWave)}
                      style={{ borderColor: 'black', width: '100%', marginTop: 25 }}>
                      {WAVE_OPTIONS.map((value, index) => (
                        <option key={index} value={value}>{`Wave ${value}`}</option>
                      ))}
                    </Form.Dropdown>
                  </Column>
                </div>

                {coursesDisplayed.map((course, index) => {
                  return (
                    <Class key={index}>
                      <img src={course.imageUrl} style={{ float: 'left', height: 'auto', maxWidth: '40%', marginRight: 10 }}/>
                      <ClassText>
                        <p style={{ margin: 0 }}>
                          <a href={'/' + course.id}>{course.courseTitle}{course.waitlisted && ' (WAITLISTED)'}</a><br/>
                          <b>Dates/Times: </b>{course.classDays + ' at ' + course.classTime + ' EDT'} <br/>
                        </p>
                        <Row>
                          {course.zoomLink && !course.waitlisted &&
                    <a href={course.zoomLink} target="_blank" style={{ textDecoration: 'none', color: 'white', margin: 'auto', height: 'auto' }}>
                      <Form.Button style={{ margin: 5 }}>
                        <b>Zoom Link</b>
                      </Form.Button></a>}
                          {course.edLink && !course.waitlisted &&
                          <a href={course.edLink} target="_blank" style={{ textDecoration: 'none', color: 'white', margin: 'auto', height: '100%' }}>
                            <Form.Button style={{ margin: 5 }}>
                              <b>Ed</b>
                            </Form.Button></a>}
                        </Row>
                        <Form.Button onClick={() => { withdraw(student, course, db) }}
                          style={{ marginTop: 0, width: 'auto', height: 25, margin: 'auto', backgroundColor: 'grey' }}>
                          <Typography.Header style={{ margin: 'auto', color: 'white', fontSize: '12px' }} >
                    Withdraw
                          </Typography.Header>
                        </Form.Button>
                      </ClassText>
                    </Class>
                  )
                })}
              </Column>
            </Sections>
          </ContainerInner>
        </Container>
        <Footer/>
      </div>
    </>)
  }

  return (
    <>
      <Navbar/>
      <Container>
        <ContainerInner>
          <p>Loading information for {user.email}...</p>
        </ContainerInner>
      </Container>

      <Footer/>
    </>)
}

export default Dashboard
