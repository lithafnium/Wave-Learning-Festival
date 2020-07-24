import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { Colors, Typography } from '@/styles'
import { ListContainer, Card, Header, Title, Teachers, Category, CardCompressed, CardExpanded, CourseImage, CourseInfo, Heading, HeaderP, Button, HeadingCompressed } from './styles'
import AnimateHeight from 'react-animate-height'
import WaveLogo from '../../pages/Blog/wave-learning-logo.png'

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

  var dayOffset = 0
  var timezoneOffsetHours = timezoneOffset / 1000 / 60 / 60
  if (hours + timezoneOffsetHours >= 24) {
    dayOffset = 1
  }
  if (hours + timezoneOffsetHours < 0) {
    dayOffset = -1
  }

  return new Date(dateTimeInLocal.getTime() + totalMillis + timezoneOffset)
}

export const getTimeDisplay = (time) => {
  // console.log("Class time in EDT:", data.classTime)

  var startTime
  var offset
  var endTime
  try {
    const [startTimeString, hyphen, endTimeString] = time.split(' ')

    startTime = convertHoursToLocalTime(startTimeString)
    endTime = convertHoursToLocalTime(endTimeString)
  } catch (TypeError) {
    return time + ' (Times are in EDT)'
  }
  // console.log("start time:", startTime.toLocaleTimeString('en-US'));
  // console.log("end time:", endTime.toLocaleTimeString('en-US'));

  if (!startTime.toLocaleTimeString('en-US').includes('Invalid Date') || !endTime.toLocaleTimeString('en-US').includes('Invalid Date')) {
    var startTimeNoSec = noSeconds(startTime)
    var endTimeNoSec = noSeconds(endTime)

    return `${startTimeNoSec} - ${endTimeNoSec}`
  }
  return time + ' (Times are in EDT)'
}

export const getTimezoneCode = () => {
  return 'Eastern Time' // new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]
}

const CourseCard = ({ title, teachers, category, color, image, description, classDates, classDays, time, targetAudience, courseId, archive }) => {
  const [show, toggleShow] = useState(false)
  useEffect(() => {
  })
  var classTime = time // getTimeDisplay(time);
  var timezoneCode = getTimezoneCode()
  return (
    <Card color = {color} onClick = {() => toggleShow(!show)}>
      <CardCompressed >
        <Title show={show}><p>{title}</p></Title>

        {archive && <Teachers show={show}>{teachers.map((teacher, index) => {
          if (index === teachers.length - 1) {
            return <p>{teacher.name} {teacher.school && `(${teacher.school})`}</p>
          } else {
            return <p>{teacher.name} {teacher.school && `(${teacher.school})`}, </p>
          }
        })}</Teachers>}
        {classDates && <HeadingCompressed show = {show}><p> {classDates}</p></HeadingCompressed>}

      </CardCompressed>
      <AnimateHeight height={show ? 'auto' : 0} duration={80}>
        <CardExpanded>
          <CourseImage>
            <img src = {image} alt={WaveLogo} />
          </CourseImage>
          <CourseInfo>
            <h3>Course Description:</h3>
            <p>{description}</p>
            <h3>Teachers:</h3>
            <Teachers>{teachers.map((teacher, index) => {
              if (index === teachers.length - 1) {
                return <p>{teacher.name} {teacher.school && `(${teacher.school})`}</p>
              } else {
                return <p>{teacher.name} {teacher.school && `(${teacher.school})`}, </p>
              }
            })}
            </Teachers>
            {targetAudience && <Heading><HeaderP >Target Audience: </HeaderP> <p> {targetAudience}</p></Heading>}
            {classDates && <Heading><HeaderP>Class Dates: </HeaderP> <p> {classDates}</p></Heading>}
            {classDays && <Heading><HeaderP>Class Days: </HeaderP> <p> {classDays}</p></Heading>}
            {time && <Heading><HeaderP>Class Time ({classTime.includes('EDT') ? 'EDT' : timezoneCode}): </HeaderP><p> {classTime}</p></Heading>}
            {!archive && <Button onClick={() => window.open(`/${courseId}`, '_blank')} color = {color}>Learn More</Button>}
          </CourseInfo>
        </CardExpanded>
      </AnimateHeight>

    </Card>

  )
}

export default CourseCard
