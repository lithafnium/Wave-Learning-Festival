<<<<<<< HEAD
import React, { useState, useContext } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from "../../../globalStyles.js"
import {FirebaseContext} from '../../../firebaseContext'
import 'firebase/firestore'

const CoursePage = ({ match }) => {
    const {db} = useContext(FirebaseContext)
    const slug = match.params.slug;
    const [courseTitle, setCourseTitle] = useState('')
    const [courseDescription, setCourseDescription] = useState('')
    const [classDateTime, setClassDateTime] = useState('')
    const [teacherName, setTeacherName] = useState('')
    const [teacherBio, setTeacherBio] = useState('')
    const [teacherHeadshot, setTeacherHeadshot] = useState(null)
    const [docData, setDocData] = useState(null)
    //let docData = null;
    if (!db){
      return (
        <div><h1>Couldn't connect to Database</h1></div>
      )
    }
    console.log("Testing")
    if(db){
      console.log("REACHED DB");
      const courses = db.collection('fl_content').doc(slug);//'9nA09uxTNz8S6Jgjyfn3');
      courses.get().then(function(doc) {
        if (doc.exists) {
           const data = doc.data();
           //setDocData(doc);
           setCourseTitle(data.courseTitle);
           setCourseDescription(data.courseDescription);
           setClassDateTime(data.classDateTime);
           setTeacherName(data.teacherName);
           setTeacherBio(data.teacherBio);
           /*setTeacherHeadshot(data.teacherHeadshot);*/
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    }
=======
import React, {useContext} from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from "../styles"
import './styles.css'
import {FirebaseContext} from '../../../firebaseContext'

const CoursePage = (docId) => {
    const {db} = useContext(FirebaseContext)

    const pageInfo = db.collection('fl_content').doc(docId); 
    console.log("Collect Info");
    /*() => {
        if(db){
            const pageInfo = 
            return pageInfo;
        }
       return;
    }*/

>>>>>>> Initial Flamelink commit
    return (
      <div>
          <Navbar/>
          <Container>
              <ContainerInner>
<<<<<<< HEAD
              <h1>{courseTitle}</h1>
                <p>
                {courseDescription}
                </p>
                <p style={{clear: 'right'}}>
                <b>Class Date + Time: </b>{classDateTime}
                </p>
                <p>
                <img src={teacherHeadshot}/>
                <b>Taught by: </b>{teacherName}<br/>
                <b>Teacher Bio: </b>{teacherBio}
                </p>
=======
              <h1>{pageInfo.courseTitle}</h1>
                <p>
                {pageInfo.courseDescription}
                </p>
                <p style={{clear: 'right'}}>
                <b>Class Date + Time: </b>{pageInfo.classDateTime}
                </p>
                <p>
                <img src={pageInfo.teacherHeadshot} class="img-left"/> 
                <b>Taught by: </b>{pageInfo.teacherName}<br/>
                <b>Teacher Bio: </b>{pageInfo.teacherBio}</p>
>>>>>>> Initial Flamelink commit
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
