import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import './styles.css'
import {Colors, Typography} from "../../styles";
import {FirebaseContext} from '../../firebaseContext'
import { Button, Header, Title, Teachers } from "./styles"
import 'firebase/firestore'

import WaveLogo from '../Blog/wave-learning-logo.png'
import ProgressBar from './w3_progressbar-04.png'

import Filter from '../../components/Filter'
import CourseCard from '../../components/CourseCard'

const Courses = () => {
  const { db, storage } = useContext(FirebaseContext)
  const [loading, setLoading] = useState(true);
  const [courses, updateCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([])
  const [filteredItems, updateFiltered] = useState([])
  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

  const addFilter = (text, color) => {
    updateFiltered(filteredItems => [...filteredItems, {text, color}])
  }

  const removeFilter = (text, color) => {
    updateFiltered(filteredItems.filter(item => item.text !== text))
  }
  const categories = {
    "tech": "Science and Tech", 
    "aesthetics": "Aesthetics and Culture",
    "history": "History, Society, and Individuals"
  }

  const onSearch = (e) => {
    if(e.length === 0){
      setFilteredCourses(courses)
    } else{
      setFilteredCourses(courses.filter(course => {
        return course.title.toLowerCase().includes(e.toLowerCase()) ? true : false
      }))
    }
  }

  /* Set Current Wave */ 
  const WAVE = "3";

    useEffect(() => {
      if(db) {
        db.collection('fl_content').get().then(function(querySnapshot){
          querySnapshot.forEach(async function(doc) {
            if (doc.data().schema == "coursePage" && doc.data().wave === WAVE) {
              console.log(doc.data())
              db.doc(doc.data().picture[0].path).get().then(async function(picture) {
                if (picture.exists) {
                  storage.child('flamelink/media/' + picture.data().file).getDownloadURL()
                    .then(function(url) {
                      let teachers = []
                      if(doc.data().teachers.teacher1Name){
                        teachers.push(doc.data().teachers.teacher1Name)
                      } 
                      if(doc.data().teachers.teacher2Name){
                        teachers.push(doc.data().teachers.teacher2Name)
                      } 
                      if(doc.data().teachers.teacher3Name){
                        teachers.push(doc.data().teachers.teacher3Name)
                      } 
                      if(doc.data().teachers.teacher4Name){
                        teachers.push(doc.data().teachers.teacher4Name)
                      } 
                      if(doc.data().teachers.teacher5Name){
                        teachers.push(doc.data().teachers.teacher5Name)
                      } 
                      if(doc.data().teachers.teacher6Name){
                        teachers.push(doc.data().teachers.teacher6Name)
                      } 
                      if(doc.data().teachers.teacher7Name){
                        teachers.push(doc.data().teachers.teacher7Name)
                      } 
                        const course = {
                          title: doc.data().courseTitle,
                          category: doc.data().courseCategory,
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
              setLoading(true)
          })
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db, storage])

  useEffect(() => {
    if(filteredItems.length === 0){
      setFilteredCourses(courses)
    } else{
      setFilteredCourses(courses.filter(course => {
        for(let i = 0; i < filteredItems.length; i++){
          if(course.category === filteredItems[i].text){
            return true
          }
        }
        return false
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredItems])


  if (!loading) {
    return (
      <>
      <Navbar/>
      <Container>
      <ContainerInner>
        <Typography.BodyText style={{color: Colors.WLF_BLACK}}>
          Loading...
        </Typography.BodyText>
      </ContainerInner>
      </Container>
      <Footer/>
      </>
    );
  }
    return(
        <div>
            <Navbar/>
            <Container>
            <ContainerInner>
            <div class="progressbar">
              <img src= {ProgressBar} alt = "centered image" />
            </div>

            <Typography.BodyText style={{color: Colors.WLF_BLACK }}>
            We are excited to offer <strong>{courses.length} courses</strong> across a variety of subjects for Wave Three running from <strong>July 6th to July 24th</strong>. Our
            volunteer educators have worked hard to prepare engaging and
            thoughtful curricula and can't wait to share their passions with
            you. Feel free to send any
            questions to{" "}
            <a href="mailto:wavelf.logistics@gmail.com">
              wavelf.logistics@gmail.com
            </a><p></p>Click each course for more info –– note the target audience range, course times, and class maxes.<br /><br /><br />
            </Typography.BodyText>
            <a href="#coursereg" class="sign-up-link">
              <Button>
                <p>Register Now!</p>
              </Button>
            </a>
            <div class = "row">
              <Filter 
                addFilter={addFilter} 
                removeFilter={removeFilter} 
                searchItems={onSearch}
                filteredItems={filteredItems}
                />
            </div>
            <Header>
              <Title><p>Course Title</p></Title>
              <Teachers><p>Teachers</p></Teachers>
            </Header> 
            {filteredCourses.map( (course, index) => {
              const {title, teachers, image, description, classDates, time, targetAudience, classDays, id} = course
              return(
                <CourseCard
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
        <Typography.Header style={{color: Colors.WLF_PURPLE}}>Course Schedule</Typography.Header>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8tk6cntof4tuog58lv572ikcp4%40group.calendar.google.com&ctz=America%2FBoston"
            style={{'border': '0px', 'width':'100%', 'height':'600px', 'frameborder':'0px', 'scrolling':'no'}}>
          </iframe>
          <Typography.Header id="coursereg" style={{color: Colors.WLF_PURPLE, marginTop: 50}}>Register by 6/30 to take a class in the third wave!</Typography.Header>
	        <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 50}}>
             If you are unavailable for this wave, sign up for <a href = "www.wavelf.org/#newsletter">updates</a> to be the first to register for future waves!
          </Typography.BodyText>
          <iframe
            title="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSe8hslWrvKqf8FAA7-dljXimDtmS4kXAGetyZUybkIQHmCQLQ/viewform?embedded=true"
            width="100%"
            height="500"
            frameborder="0"
            marginheight="0"
            marginwidth="0">Loading…</iframe>
            </ContainerInner>
          </Container>
            <Footer/>
        </div>
    )
}

export default Courses
