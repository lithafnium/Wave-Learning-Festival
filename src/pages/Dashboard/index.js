import React, { useState, useContext, useEffect, useReducer } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { Colors, Typography, Form } from '@/styles'
import { FirebaseContext } from '../../firebaseContext'
import './styles.css'
import { Cancel, EditInput, ProfileLeft, ProfileRight, Column, Text, Row, Label, Class, ClassText, Sections } from './styles.js'
import WavyPurple from '../About/assets/wavy_purple.svg'

const profileState = {
  name: '',
  email: '',
  parentName: '',
  parentEmail: '',
  age: '',
  school: '',
  country: '',
  city: ''
}

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return ({
        ...state,
        name: action.content
      })
    case 'EMAIL':
      return ({
        ...state,
        email: action.content
      })
    case 'PARENTNAME':
      return ({
        ...state,
        parentName: action.content
      })
    case 'PARENTEMAIL':
      return ({
        ...state,
        parentEmail: action.content
      })
    case 'AGE':
      return ({
        ...state,
        age: action.content
      })
    case 'SCHOOL':
      return ({
        ...state,
        school: action.content
      })
    case 'COUNTRY':
      return ({
        ...state,
        country: action.content
      })
    case 'CITY':
      return ({
        ...state,
        city: action.content
      })
    case 'RESET':
      return (action.content)
  }
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState(null)
  const [student, setStudent] = useState(null)
  const [theError, setTheError] = useState(null)
  const [courses, setCourses] = useState([])
  const [coursesDisplayed, setCoursesDisplayed] = useState([])
  const [wave, setWave] = useState('4')
  const [edit, toggleEdit] = useState(false)
  const [localInfo, setLocalInfo] = useState({})
  const [docID, setDocID] = useState('')
  const { db, storage, auth } = useContext(FirebaseContext)
  const [profile, profileDispatch] = useReducer(profileReducer, profileState)

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

  const genFrag = function (label, data, dispatch, state) {
    return {
      label,
      data,
      dispatch,
      state
    }
  }

  const generateStudentInfo = function (student) {
    var studentName = student.name
    if (typeof studentName === 'undefined') {
      studentName = student.name_first + ' ' + student.name_last
    }
    return [
      genFrag('Name', studentName, 'NAME', 'name'),
      genFrag('Email', student.email, 'EMAIL', 'email'),
      genFrag('Parent Name', student.parentName, 'PARENTNAME', 'parentName'),
      genFrag('Parent Email', student.parentEmail, 'PARENTEMAIL', 'parentEmail'),
      genFrag('Age', student.age, 'AGE', 'age'),
      genFrag('School', student.school, 'SCHOOL', 'school'),
      genFrag('Country', student.country, 'COUNTRY', 'country'),
      genFrag('City', student.city, 'CITY', 'city')
    ]
  }

  useEffect(() => {
    if (db && auth) {
      // console.log("call " + calledOnce);
      auth.onAuthStateChanged(function (theUser) {
        if (theUser) {
          // console.log(result.user.uid);

          setUser(theUser)
          db.collection('StudentRegistrations').where('userID', '==', theUser.uid).get().then(function (snapshot) {
            var students = []
            console.log(snapshot)

            snapshot.forEach(function (snap) {
              students.push(snap)
            })
            if (students.length > 0) {
              var coursesResult = []
              setDocID(students[0].id)
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

  useEffect(() => {
    if (student) {
      var studentInfo = generateStudentInfo(student)
      var studentName = student.name
      if (typeof studentName === 'undefined') {
        studentName = student.name_first + ' ' + student.name_last
      }
      setLocalInfo({
        name: studentName,
        email: student.email,
        parentName: student.parentName,
        parentEmail: student.parentEmail,
        age: student.age,
        school: student.school,
        country: student.country,
        city: student.city
      })
      studentInfo.forEach(label => {
        profileDispatch({ type: label.dispatch, content: label.data })
      })
    }
  }, [student])

  const cancel = () => {
    profileDispatch({ type: 'RESET', content: localInfo })
    toggleEdit(false)
  }

  const submit = () => {
    if (localInfo.name !== profile.name ||
           localInfo.email !== profile.email ||
           localInfo.parentName !== profile.parentName ||
            localInfo.parentEmail !== profile.parentEmail) {
      const editRef = db.collection('editAssignments').where('studentId', '==', student.id)
      editRef.get().then(snapshot => {
        if (!snapshot.empty) {
          db.collection('editAssignments').doc(snapshot.docs[0].id).update({
            name: profile.name,
            email: profile.email,
            parentName: profile.parentName,
            parentEmail: profile.parentEmail,
            studentId: student.id,
            userId: student.userID,
            courses: coursesDisplayed
          })
        } else {
          db.collection('editAssignments').add({
            name: profile.name,
            email: profile.email,
            parentName: profile.parentName,
            parentEmail: profile.parentEmail,
            studentId: student.id,
            userId: student.userID,
            courses: coursesDisplayed
          })
        }
      })
    }
    const name = profile.name.split(' ')
    db.collection('StudentRegistrations').doc(docID).update({
      name_first: name[0],
      name_last: name[1],
      email: profile.email,
      parentEmail: student.parentEmail,
      parentName: profile.parentName,
      age: profile.age,
      school: profile.school,
      country: profile.country,
      city: profile.city
    })

    if (localInfo.email !== profile.email) {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          user.updateEmail(profile.email).then(() => {

          }).catch(e => {
            throw e
          })
        } else {
        }
      })
    }

    setLocalInfo(profile)
    toggleEdit(false)
  }

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

  const inputChanged = function (setWave) {
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

  const WAVE_OPTIONS = [
    4/*,
    3,
    2,
    1 */
  ]

  if (student) {
    var studentInfo = generateStudentInfo(student)
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
                    {studentInfo.map((info, index) => {
                      return (
                        <Row key={index}>
                          <ProfileLeft>
                            <Label>{`${info.label} `}</Label>
                          </ProfileLeft>
                          <ProfileRight>
                            <EditInput
                              edit={edit}
                              disabled={!edit}
                              value={profile[info.state]}
                              onChange={e => profileDispatch({ type: info.dispatch, content: e.target.value })}/>
                          </ProfileRight>
                        </Row>
                      )
                    })}
                    <br/>
                  </Text>
                  {edit && <Row style={{ alignItems: 'center' }}>
                    <Form.Button onClick={() => submit()} style={{ marginTop: 0, marginRight: 20, marginLeft: 20, width: 100, textAlign: 'center', fontSize: 18 }}>
                      <b style ={{ color: 'white' }}>Submit</b>
                    </Form.Button>
                    <Cancel onClick={() => cancel()} style ={{ color: 'white' }}>Cancel</Cancel>
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
