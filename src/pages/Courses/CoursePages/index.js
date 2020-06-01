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

    return (
      <div>
          <Navbar/>
          <Container>
              <ContainerInner>
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
