import React, { useState, useContext } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from "../../../globalStyles.js"
import {Colors, Typography} from "../../../styles";
import {FirebaseContext} from '../../../firebaseContext'
import 'firebase/firestore'

import Teacher from './teacher'

const CoursePage = ({ match }) => {
    const { db, storage } = useContext(FirebaseContext)
    const slug = match.params.slug;
    const [loading, setLoading] = useState(true);
    const [courseTitle, setCourseTitle] = useState('')
    const [courseDescription, setCourseDescription] = useState('')
    const [classDateTime, setClassDateTime] = useState('')

    //Teacher Objects
    const [teachers, setTeachers] = useState([]);
    const [headshot1, setHeadshot1] = useState("");
    const [headshot2, setHeadshot2] = useState("");

    if (loading && (!db || !storage)) {
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

    if(db && loading){
      const courses = db.collection('fl_content').doc(slug);
      courses.get()
      .then(function(doc) {
        if (doc.exists) {
          const data = doc.data();
          if (!courseTitle) {
            setCourseTitle(data.courseTitle);
          }
          if (!courseDescription) {
            setCourseDescription(data.courseDescription);
          }
          if (!classDateTime) {
            setClassDateTime(data.classDateTime);
          }
          
          //Deal with Teachers: 
          if (teachers.length == 0) {

          const teacher1 = new Teacher (
            db, 
            storage,
            data.teachers.teacher1Name, 
            data.teachers.teacher1School, 
            data.teachers.teacher1Bio, 
            data.teachers.teacher1Headshot[0]
          );

          const teacher2 = new Teacher (
            db, 
            storage,
            data.teachers.teacher2Name, 
            data.teachers.teacher2chool, 
            data.teachers.teacher2Bio, 
            data.teachers.teacher2Headshot[0]
          );

          teacher1.getPic().then(function(url) {
            setHeadshot1(url);
          })
          .catch(console.log);

          teacher2.getPic().then(function(url) {
            setHeadshot2(url);
          })
          .catch(console.log);
        
        setTeachers([teacher1, teacher2]);
        }

        } else {
            // doc.data() will be undefined in this case
            console.log("No teachers!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
            
      setLoading(false);
    }

    return (
      <div>
          <Navbar/>
          <Container>
              <ContainerInner>
              <h1>{courseTitle}</h1>
                <p>
                {courseDescription}
                </p>
                <p style={{clear: 'right'}}>
                <b>Class Date + Time: </b>{classDateTime}
                </p>
                
                {teachers.map(teacher => (
                  <div class="teacher-container">
                    <p> 
                    <img src={headshot1} class="img-left"/>
                    <b>Taught by: </b>{teacher.name}<br/>
                    <b>Teacher Bio: </b>{teacher.bio}
                    </p>
                  </div>
                ))}

                <h1>Register for this course!</h1>
                  <iframe
                title="form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdEci1eOpQ8IvYSFCxsgQOXfKL5LpJhZRWvfBLrrzAPrgyuZw/viewform?embedded=true"
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

export default CoursePage
