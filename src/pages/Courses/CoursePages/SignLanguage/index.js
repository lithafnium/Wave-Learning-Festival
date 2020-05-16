import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/sign-language.png"
import AnonymousProfile from "../../teacherheadshots/Emma Doughty.JPG"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Introduction to American Sign Language</h1>
                  <p>
                  This highly interactive course will cover the basics of ASL, and will guide students to conversational skill level. No prior experience necessary.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>MWF, 5/25-6/12, 12-12:45pm EDT
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Emma Doughty<br/>
                  <b>Teacher Bio: </b>I'm teaching this course to simply spread awareness about invisible disabilities, and to share my beautiful culture that I am so ever grateful to be a part of! Some fun facts: I was born deaf, I have red hair, I love taking care of my houseplants, and I love to read.
                  </p>
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
