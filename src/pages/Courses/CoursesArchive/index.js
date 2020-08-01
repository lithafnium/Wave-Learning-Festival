import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { FirebaseContext } from '../../../firebaseContext'
import { Colors, Typography } from '@/styles'
import { ListContainer, Header, Title, Teachers } from './styles'
import CourseCard from '../../../components/CourseCard'
const CoursesArchive = () => {
  const { db, storage } = useContext(FirebaseContext)
  const [courses, updateCourses] = useState([])
  const [loading, setLoading] = useState(false)
  const WAVE = 3
  const categories = {
    tech: 'Science and Tech',
    aesthetics: 'Aesthetics and Culture',
    history: 'History, Society, and Individuals'
  }
  const waves = ['1', '2', '3']
  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

  useEffect(() => {
    if (db) {
      db.collection('fl_content').get().then(function (querySnapshot) {
        querySnapshot.forEach(async function (doc) {
          if (doc.data().schema == 'coursePage') {
            db.doc(doc.data().picture[0].path).get().then(async function (picture) {
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
                      category: categories[doc.data().courseCategory],
                      image: url,
                      description: doc.data().courseDescription,
                      teachers,
                      wave: doc.data().wave
                    }
                    updateCourses(courses => [...courses, course])
                  })
              }
            })
          }
        })
        setLoading(true)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db, storage])
  if (!loading) {
    return (<div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <p>Loading...</p>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>)
  }
  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>
          {
            waves.map((waveNum, index) => {
              return (
                <div key={index}>
                  <Typography.Header style={{ color: Colors.WLF_PURPLE }}>Wave {waveNum}</Typography.Header>
                  <Header>
                    <Title><p>Course Title</p></Title>
                    <Teachers><p>Teachers</p></Teachers>
                  </Header>
                  <ListContainer>
                    {courses.map((course, index) => {
                      const { wave, title, category, image, description, teachers } = course
                      if (wave === waveNum) {
                        return (
                          <CourseCard
                            color={colors[index % 4]}
                            title = {title}
                            teachers = {teachers}
                            category = {category}
                            image = {image}
                            description = {description}
                            archive = {true}/>
                        )
                      }
                    })}
                  </ListContainer>
                </div>
              )
            })
          }
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default CoursesArchive
