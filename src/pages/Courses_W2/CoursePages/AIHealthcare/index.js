import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/anonymous-profile.png"

const CourseFinancialLiteracy = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>AI in Healthcare</h1>
                  <p> Updated Soon!
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> June 15-June 26
                  <br/><b>Format: </b> Monday, Tuesday, Wednesday, Thursday, Friday 
                  <br/><b>Time (EDT): </b> 12pm-1pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Annika Viswesh<br/>
                  <b>Teacher Bio: </b> I am a rising junior at Palo Alto High School, California. I love learning and spreading my knowledge to others. I will be teaching a class on Artificial Intelligence in Healthcare. I am very passionate about STEM and have been conducting research in Biology, Computer Science, and Math since middle school. I am very curious about Artificial Intelligence because it is improving the way we live our lives in many ways from bridging language barriers to transforming governments. AI is also making giant strides in the healthcare field from predicting early onset of disorders like diabetic retinopathy to accelerating drug discovery for treating COVID-19. I hope to share my knowledge about AI and healthcare with you. I have gained my knowledge from taking courses and by performing research in these areas. I have also enriched my understanding by developing AI curriculum and leading AI workshops for people with disabilities. I have taught programming to kids of all ages at several libraries in my community. In my free time, I enjoy reading and playing chamber music with friends.
                  </p>
                  <h1>Register for this course!</h1>
                    <iframe
                  title="form"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeML1NrfKfCVFZ_HIYHGCrGcwJ0BX0C3wRaAcTS6zGBD0nDgQ/viewform?embedded=true"
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

export default CourseFinancialLiteracy
