import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '@/globalStyles'

import Profile from "../../../Courses_W1/teacherheadshots/Emma Doughty.JPG"

const CourseSignLanguage2 = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>ASL Basics Continued</h1>
                  <p>
                  This highly interactive course will cover the basics of ASL, and will guide students to conversational skill level. No prior experience necessary.
                  Emma's class is back due to incredibly popular demand from Wave One. <b>This class is a continuation of the ASL course in Wave 1</b>
                  <br/><b>Max Class Size: </b>50
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> June 15 - June 26
                  <br/><b>Format: </b> Monday, Wednesday, and Friday
                  <br/><b>Time (EDT): </b> 12pm - 1pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Emma Doughty<br/>
                  <b>Teacher Bio: </b> I'm teaching this course to simply spread awareness about invisible disabilities, and to share my beautiful culture that I am so ever grateful to be a part of! Some fun facts: I was born deaf, I have red hair, I love taking care of my houseplants, and I love to read.
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

export default CourseSignLanguage2
