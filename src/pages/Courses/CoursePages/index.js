import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import PopUpHTML from '../../../components/PopUp/PopUpHTML.js'
import { Container, ContainerInner } from '../../../globalStyles.js'
import { Colors, Typography } from '../../../styles'
import { Button } from '../styles'
import { FirebaseContext } from '../../../firebaseContext'
import 'firebase/firestore'
import { Icon, Property } from './styles'
import { FaBookOpen } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import TeachersComponent from './teachers-component.js'

const CoursePage = ({ match }) => {
  const { db, storage } = useContext(FirebaseContext)
  const slug = match.params.slug
  const [loading, setLoading] = useState(true)
  const [showSyllabus, setShowSyllabus] = useState(false)

  // Course Objects
  const [courseTitle, setCourseTitle] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [syllabus, setSyllabus] = useState('')
  const [prereqs, setPrereqs] = useState('')
  const [classSize, setClassSize] = useState('')
  const [targetAudience, setTargetAudience] = useState('')
  const [classDates, setClassDates] = useState('')
  const [classDays, setClassDays] = useState('')
  const [classTime, setClassTime] = useState('')
  const [teachersObj, setTeachersObj] = useState('')

  // Teacher Objects
  const [teachers, setTeachers] = useState([])
  const [headshot1, setHeadshot1] = useState('')
  const [headshot2, setHeadshot2] = useState('')
  const [headshot3, setHeadshot3] = useState('')

  if (loading && (!db || !storage)) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            Loading...
            </Typography.BodyText>
          </ContainerInner>
        </Container>
        <Footer/>
      </>
    )
  }

  if (db && loading) {
    const courses = db.collection('fl_content').doc(slug)
    courses.get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data()
          // console.log("here data:", data)

          // This will all move to a course object
          if (!courseTitle) {
            setCourseTitle(data.courseTitle)
          }
          if (!courseDescription) {
            setCourseDescription(data.courseDescription)
          }
          if (!syllabus) {
            setSyllabus(data.syllabusHtml)
          }
          if (!prereqs) {
            setPrereqs(data.prereqs)
          }
          if (!classSize) {
            setClassSize(data.maxClassSize)
          }
          if (!targetAudience) {
            setTargetAudience(data.targetAudience)
          }
          if (!classDates) {
            setClassDates(data.classDates)
          }
          if (!classDays) {
            setClassDays(data.classDays)
          }
          if (!classTime) {
            /*
            console.log("Class time in EDT:", data.classTime)
            const [startTimeString, hyphen, endTimeString] = data.classTime.split(' ');

            const startTime = convertHoursToLocalTime(startTimeString);
            const endTime = convertHoursToLocalTime(endTimeString);
            //console.log("start time:", startTime.toLocaleTimeString('en-US'));
            //console.log("end time:", endTime.toLocaleTimeString('en-US'));

            if (!startTime.toLocaleTimeString('en-US').includes('Invalid Date') || !endTime.toLocaleTimeString('en-US').includes('Invalid Date') ){
              var startTimeNoSec = noSeconds(startTime);
              var endTimeNoSec = noSeconds(endTime);

              setClassTime(`${startTimeNoSec} - ${endTimeNoSec}`);
            }
            else {
              setClassTime(data.classTime + " (Times are in EDT)");
            }
            */
            setClassTime(data.classTime);
          }
          if (!teachersObj) {
            setTeachersObj(data.teachers)
          }
        } else {
          // doc.data() will be undefined in this case
          console.log('No teachers!')
        }
      }).catch(function (error) {
        console.log('Error getting document:', error)
      })
    setLoading(false)
  }

  const toggleSyllabus = () => {
    console.log('SYLLABUS CLICKED')
    setShowSyllabus(!showSyllabus)
  }

  const noSeconds = (time) => {
    var timeSplit = time.toLocaleTimeString('en-US').split(':')
    return timeSplit[0] + ':' + timeSplit[1] + timeSplit[2].substr(2)
  }

  const convertHoursToLocalTime = (timeString) => {
    // calculate offset between local time and EDT
    const date = new Date()
    const invdate = new Date(date.toLocaleString('en-US', {
      timeZone: 'America/New_York' // test with Pacific/Honolulu
    }))
    const timezoneOffset = date.getTime() - invdate.getTime()

    // use timezone offset to calculate hour change
    const [hourString, remaining] = timeString.split(':')
    const minutes = parseInt(remaining.substr(0, 2))

    const dateTimeInLocal = new Date()
    dateTimeInLocal.setHours(0, 0, 0, 0)

    let hours = parseInt(hourString)
    if (remaining.includes('pm')) {
      hours %= 12
      hours += 12
    }
    const totalMillis = ((hours * 60) + minutes) * 60 * 1000

    return new Date(dateTimeInLocal.getTime() + totalMillis + timezoneOffset)
  }

  const timezoneCode = "Eastern Time"; // new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]

  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>{courseTitle}</Typography.Header>
          {courseDescription}
          {prereqs &&
                  <><br/><b>Prerequisites: </b>{prereqs}</>}
          {syllabus &&
                  <Property>
                    <br/><b>Syllabus: </b>
                    <Icon onClick={toggleSyllabus}>
                      <IconContext.Provider
                        value={{
                          color: 'black',
                          size: '1em',
                          style: { verticalAlign: 'middle' }
                        }}>
                        <div> <FaBookOpen /> </div>
                      </IconContext.Provider>
                    </Icon>
                  </Property>}
          {showSyllabus &&
                  <PopUpHTML title={'Syllabus'} content={syllabus} onClose={toggleSyllabus}/>}
          {classSize &&
                <><br/><b>Max Class Size: </b>{classSize}</>}
          {targetAudience &&
                  <><br/><b>Target Audience: </b>{targetAudience}</>}
          <p style={{ clear: 'right' }}>
            {classDates && classDays && classTime &&
                  <>
                    <b>Class Dates: </b>{classDates}
                    <b><br/>Class Days: </b>{classDays}
                    <b><br/>Time ({classTime.includes('EDT') ? 'EDT' : timezoneCode}): </b>{classTime}
                  </>}
          </p>

          <TeachersComponent teachersObj={teachersObj}/>

          <a target="_blank" href="/course-sign-up" className="sign-up-link">
            <Button>
              <p>Register Now!</p>
            </Button>
          </a>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default CoursePage
