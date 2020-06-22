import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from "../../../globalStyles.js"
import {Colors, Typography} from "../../../styles";
import { Button } from "../styles";
import {FirebaseContext} from '../../../firebaseContext'
import 'firebase/firestore'

import Teacher from './teacher.js'
import TeachersComponent from './teachers-component.js'

const CoursePage = ({ match }) => {
    const { db, storage } = useContext(FirebaseContext)
    const slug = match.params.slug;
    const [loading, setLoading] = useState(true);

    //Course Objects
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [prereqs, setPrereqs] = useState('');
    const [classSize, setClassSize] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    const [classDates, setClassDates] = useState('');
    const [classDays, setClassDays] = useState('');
    const [classTime, setClassTime] = useState('');
    const [teachersObj, setTeachersObj] = useState('');

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
            console.log("COURSE TITLE");
            setCourseTitle(data.courseTitle);
          }
          if (!courseDescription) {
            setCourseDescription(data.courseDescription);
          }
          if (!prereqs) {
            setPrereqs(data.prereqs);
          }
          if (!classSize) {
            setClassSize(data.maxClassSize);
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
          if (!teachersObj) {
            console.log(data.teachers);
            setTeachersObj(data.teachers);
          }
        } else {
            // doc.data() will be undefined in this case
            console.log("No teachers!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      console.log(teachersObj);
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
                {prereqs &&
                  <><br/><b>Prerequisites: </b>{prereqs}</>}
                {classSize &&
                <><br/><b>Max Class Size: </b>{classSize}</>}
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

                <TeachersComponent teachersObj={teachersObj}/>
                
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe8hslWrvKqf8FAA7-dljXimDtmS4kXAGetyZUybkIQHmCQLQ/viewform" class="sign-up-link">
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
