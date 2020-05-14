import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/anthropology.png"
import AnonymousProfile from "../../headshot/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>What Even is Anthropology?</h1>
                  <p>
                  <img src={CourseImage} class="img-right"/>
                  This course will provide students with the basic foundation of the study of anthropology. No prior experience necessary. 
                  </p>
                  <p style="clear:right">
                  <b>Class Date + Time: </b> M, 6/1, 3-4pm
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Cecilia Eure<br/>
                  <b>Teacher Bio: </b>
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