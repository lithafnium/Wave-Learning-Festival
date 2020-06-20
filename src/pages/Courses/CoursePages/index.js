import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from "../../../globalStyles.js"
import {Colors, Typography} from "../../../styles";
import {FirebaseContext} from '../../../firebaseContext'
import 'firebase/firestore'

import Teacher from './teacher.js'

const CoursePage = ({ match }) => {
    const { db, storage } = useContext(FirebaseContext)
    const slug = match.params.slug;
    const [loading, setLoading] = useState(true);

    //Course Objects
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [prereqs, setPrereqs] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    const [classDates, setClassDates] = useState('');
    const [classDays, setClassDays] = useState('');
    const [classTime, setClassTime] = useState('');

    //Teacher Objects
    const [teachers, setTeachers] = useState([]);
    const [headshot1, setHeadshot1] = useState("");
    const [headshot2, setHeadshot2] = useState("");
    const [headshot3, setHeadshot3] = useState("");

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

          //This will all move to a course object
          if (!courseTitle) {
            setCourseTitle(data.courseTitle);
          }
          if (!courseDescription) {
            setCourseDescription(data.courseDescription);
          }
          if (!prereqs) {
            setPrereqs(data.prereqs);
          }
          if (!targetAudience) {
            setTargetAudience(data.targetAudience);
          }
          if (!classDates) {
            setClassDates(data.classDates);
          }
          if (!classDays) {
            setClassDays(data.classDays);
          }
          if (!classTime) {
            setClassTime(data.classTime);
          }
          
          //Deal with Teachers; currently only handles two teachers
          if (teachers.length == 0) {
          
          const teacherObjs = [];

          const teacher1 = new Teacher (
            db, 
            storage,
            data.teachers.teacher1Name, 
            data.teachers.teacher1School, 
            data.teachers.teacher1Bio, 
            data.teachers.teacher1Headshot[0]
          );

          teacher1.getPic().then(function(url) {
            setHeadshot1(url);
          })
          .catch(console.log);

          teacherObjs.push(teacher1);

          if (data.teachers.teacher2Name) {
            const teacher2 = new Teacher (
              db, 
              storage,
              data.teachers.teacher2Name, 
              data.teachers.teacher2School, 
              data.teachers.teacher2Bio, 
              data.teachers.teacher2Headshot[0]
            );

            teacher2.getPic().then(function(url) {
              setHeadshot2(url);
            })
            .catch(console.log);

            teacherObjs.push(teacher2);

            
          }
          setTeachers(teacherObjs);
        }

        } else {
            // doc.data() will be undefined in this case
            console.log("No teachers!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
            
      setLoading(false);
      console.log(teachers);
    }

    return (
      <div>
          <Navbar/>
          <Container>
              <ContainerInner>
              <h1>{courseTitle}</h1>
                <p>
                {courseDescription}
                {prereqs && 
                  <><br/><b>Prerequisites: </b>{prereqs}</>}
                {targetAudience && 
                  <><br/><b>Target Audience: </b>{targetAudience}</>}
                </p>
                <p style={{clear: 'right'}}>
                {classDates && classDays && classTime && 
                  <>  
                  <b>Class Dates: </b>{classDates}
                  <b><br/>Class Weekdays: </b>{classDays}
                  <b><br/>Time (EDT): </b>{classTime}
                  </>}
                </p>

                {teachers.length > 0 &&
                  <div class="teacher-container">
                      <p>
                      <img src={headshot1} class="img-left"/>
                      <b>Taught by: </b>{teachers[0].name}<br/> 
                      <b>Teacher Bio: </b>{teachers[0].bio}
                      </p>
                  </div>} 
                {teachers.length > 1 &&
                  <div class="teacher-container">
                    <p>
                    <img src={headshot2} class="img-left"/>
                    <b>Taught by: </b>{teachers[1].name}<br/> 
                    <b>Teacher Bio: </b>{teachers[1].bio}
                    </p>
                  </div>}

                {teachers.length > 2 &&
                <div class="teacher-container">
                  <p>
                  <img src={headshot3} class="img-left"/>
                  <b>Taught by: </b>{teachers[2].name}<br/> 
                  <b>Teacher Bio: </b>{teachers[2].bio}
                  </p>
                </div>}

           
            </ContainerInner>
          </Container>
          <Footer/>
      </div>
  )
}

export default CoursePage
