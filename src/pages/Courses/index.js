import React, { useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import './styles.css'
import {Colors, Typography} from "../../styles";
import {FirebaseContext} from '../../firebaseContext'
import 'firebase/firestore'

import WaveLogo from '../Blog/wave-learning-logo.png'

const Courses = () => {
  const {db} = useContext(FirebaseContext)
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [imageRef, setImageRef] = useState('');
  const WAVE = 1;

  if (db && loading && !courses.length) {
      db.collection("fl_content")
      .get()
      .then(function(querySnapshot) {
        let posts = [];
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            if (doc.data().schema == "coursePage" && doc.data().wave == WAVE) {
              posts.push(doc);
            } 
        });
        setCourses(posts);
        setLoading(false);
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  }

  if (loading) {
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
            <Typography.BodyText style={{color: Colors.WLF_BLACK }}>
              For our inaugural wave, we are excited to offer {courses.length} courses across a variety of subjects. Our volunteer educators have worked hard to prepare engaging and thoughtful curricula, and can't wait to share their passions with you. Click each course for more info, and feel free to send any questions to <a href="mailto:wavelf.logistics@gmail.com">wavelf.logistics@gmail.com</a>.
            </Typography.BodyText>
            <div class="container">
            <div class="row">
            {courses.map(course => (
              <div class="column">
                <a href={`${course.id}`}>
                  <div class="course">
                    <div class="image-container">
                      <img src={WaveLogo}/>
                    </div>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK}}>{course.data().courseTitle}</Typography.Header2>
                    <Typography.BodyText style={{fontSize: 16}}>{course.data().teacherName}</Typography.BodyText>
                    <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>{course.data().teacherSchool}</Typography.BodyText>
                  </div>
                </a>
              </div>
            ))}
        </div>
        </div>
        <Typography.Header style={{color: Colors.WLF_PURPLE}}>Course Schedule</Typography.Header>
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=8tk6cntof4tuog58lv572ikcp4%40group.calendar.google.com&ctz=America%2FBoston" 
            style={{'border': '0px', 'width':'100%', 'height':'600px', 'frameborder':'0px', 'scrolling':'no'}}>
          </iframe>  
          <Typography.Header style={{color: Colors.WLF_PURPLE, marginTop: 50}}>Register by 5/23 to take a class in the first wave!</Typography.Header>
	        <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 50}}>
            Sign-ups are on a first-come-first-serve basis. If you are unavailable for this wave, sign up for <a href = "www.wavelf.org/#newsletter">updates</a> to be the first to register for future waves!
          </Typography.BodyText>
            <iframe
              title="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdEci1eOpQ8IvYSFCxsgQOXfKL5LpJhZRWvfBLrrzAPrgyuZw/viewform?embedded=true"
              width="100%"
              height="400"
              frameborder="0"
              marginheight="0"
              marginwidth="0">Loading…
            </iframe>
            </ContainerInner>
          </Container>
            <Footer/>
        </div>
    )
}

export default Courses
