import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography } from '../../styles'
import { FirebaseContext } from '../../firebaseContext'
import { Button, Header, Title, Heading } from './styles'
import 'firebase/firestore'

import WaveLogo from '../Blog/wave-learning-logo.png'
import ProgressBar from './ProgressBars/w4_progressbar-01.png'

import Filter from '../../components/Filter'
import CourseCard from '../../components/CourseCard'

const Courses = () => {
  const { db, storage } = useContext(FirebaseContext)
  const [loading, setLoading] = useState(false)
  const [courses, updateCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [filteredItems, updateFiltered] = useState([])
  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

  const addFilter = (text, color, age) => {
    updateFiltered(filteredItems => [...filteredItems, { text, color }])
  }

  const removeFilter = (text, color, age) => {
    updateFiltered(filteredItems.filter(item => item.text !== text))
  }
  const categories = {
    tech: 'Science and Tech',
    aesthetics: 'Aesthetics and Culture',
    history: 'History, Society, and Individuals'
  }

  const onSearch = (e) => {
    if (e.length === 0 && filteredItems.length === 0) {
      setFilteredCourses(courses)
    } else if (e.length === 0 && (filteredItems.length !== 0)) {
      setFilteredCourses(courses.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetGrades.includes(filteredItems[i].text)) return false
          } else if (!course.category.includes(filteredItems[i].text)) {
            return false
          }
        }
        return true
      }))
    } else if (filteredItems.length === 0) {
      setFilteredCourses(courses.filter(course => {
        return course.title.toLowerCase().includes(e.toLowerCase())
      }))
    } else {
      setFilteredCourses(courses.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetGrades.includes(filteredItems[i].text)) return false
          } else if (!course.category.includes(filteredItems[i].text)) {
            return false
          }
        }
        if (course.title.toLowerCase().includes(e.toLowerCase())) {
          return true
        }
        return false
      }))
    }
  }

  /* Set Current Wave */
  const WAVE = '4'

  useEffect(() => {
    if (db) {
      db.collection('fl_content').onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().schema === 'coursePage' && doc.data().wave === WAVE) {
            console.log(doc.data())
            db.doc(doc.data().picture[0].path).onSnapshot(function (picture) {
              if (picture.exists) {
                storage.child('flamelink/media/' + picture.data().file).getDownloadURL()
                  .then(function (url) {
                    const teachers = []
                    if (doc.data().teachers.teacher1Name) {
                      teachers.push({
                        name: doc.data().teachers.teacher1Name,
                        school: doc.data().teachers.teacher1School
                      })
                    }
                    if (doc.data().teachers.teacher2Name) {
                      teachers.push({
                        name: doc.data().teachers.teacher2Name,
                        school: doc.data().teachers.teacher2School
                      })
                    }
                    if (doc.data().teachers.teacher3Name) {
                      teachers.push({
                        name: doc.data().teachers.teacher3Name,
                        school: doc.data().teachers.teacher3School
                      })
                    }
                    if (doc.data().teachers.teacher4Name) {
                      teachers.push({
                        name: doc.data().teachers.teacher4Name,
                        school: doc.data().teachers.teacher4School
                      })
                    }
                    if (doc.data().teachers.teacher5Name) {
                      teachers.push({
                        name: doc.data().teachers.teacher5Name,
                        school: doc.data().teachers.teacher5School
                      })
                    }
                    if (doc.data().teachers.teacher6Name) {
                      teachers.push({
                        name: doc.data().teachers.teacher6Name,
                        school: doc.data().teachers.teacher6School
                      })
                    }
                    if (doc.data().teachers.teacher7Name) {
                      teachers.push({
                        name: doc.data().teachers.teacher7Name,
                        school: doc.data().teachers.teacher7School
                      })
                    }
                    const course = {
                      title: doc.data().courseTitle,
                      category: doc.data().courseCategory,
                      targetGrades: doc.data().targetAudienceGrades,
                      image: url,
                      teachers,
                      description: doc.data().courseDescription,
                      teacher1Name: doc.data().teachers.teacher1Name,
                      teacher2Name: doc.data().teachers.teacher2Name,
                      teacher3Name: doc.data().teachers.teacher3Name,
                      teacher1School: doc.data().teachers.teacher1School,
                      teacher2School: doc.data().teachers.teacher2School,
                      teacher3School: doc.data().teachers.teache3School,
                      id: doc.data().id,
                      classDates: doc.data().classDates,
                      time: doc.data().classTime,
                      targetAudience: doc.data().targetAudience,
                      classDays: doc.data().classDays
                    }
                    updateCourses(courses => [...courses, course])
                    setFilteredCourses(filteredCourses => [...filteredCourses, course])
                  })
              }
            })
          }
        })
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db, storage])

  useEffect(() => {
    if (filteredItems.length === 0) {
      setFilteredCourses(courses)
    } else {
      setFilteredCourses(courses.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetGrades.includes(filteredItems[i].text)) return false
          } else if (!course.category.includes(filteredItems[i].text)) {
            return false
          }
        }
        return true
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredItems])

  useEffect(() => {
    if (courses.length >= 80) {
      setLoading(true)
    }
  }, [courses])

  if (!loading) {
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
  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <div className="progressbar">
            <img src= {ProgressBar} alt = "centered image" />
          </div>

          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            We are excited to offer <strong>{courses.length} courses</strong> across a variety of subjects for Wave Four running from <strong>July 27th to August 14th</strong>. Our
            volunteer educators have worked hard to prepare engaging and
            thoughtful curricula and can't wait to share their passions with
            you. Feel free to send any
            questions to{' '}
            <a href="mailto:wavelf.logistics@gmail.com">
              wavelf.logistics@gmail.com
            </a><p></p>Click each course for more info –– note the target audience range, course times, and class maxes.<br /><br /><br />
          </Typography.BodyText>
          <a href="/course-sign-up" className="sign-up-link">
            <Button>
              <p>Register Now!</p>
            </Button>
          </a>
          <div className = "row">
            <Filter
              addFilter={addFilter}
              removeFilter={removeFilter}
              searchItems={onSearch}
              filteredItems={filteredItems}
            />
          </div>
          <Header>
            <Title><p>Course Title</p></Title>
            <Heading><p>Dates</p></Heading>
          </Header>
          {filteredCourses.map((course, index) => {
            const { title, teachers, image, description, classDates, time, targetAudience, classDays, id } = course
            return (
              <CourseCard
                key = {index}
                title = {title}
                teachers = {teachers}
                image = {image}
                color = {colors[index % 4]}
                description = {description}
                classDates = {classDates}
                time = {time}
                targetAudience = {targetAudience}
                classDays = {classDays}
                courseId = {id}
              />)
          }
          )}
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>Course Schedule</Typography.Header>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8tk6cntof4tuog58lv572ikcp4%40group.calendar.google.com&ctz=America%2FBoston"
            style={{ border: '0px', width: '100%', height: '600px', frameborder: '0px', scrolling: 'no' }}>
          </iframe>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default Courses
