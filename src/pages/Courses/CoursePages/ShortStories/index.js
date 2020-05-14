import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/short-stories.png"
import AnonymousProfile from "../../headshot/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                  <h1>Starting Short Stories</h1>
                  <p>
                  <img src={CourseImage} class="img-right"/>
                  This course will provide students with tips on writing, getting past writer’s block, varying writing, changing voice, and understanding story pace. 
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Annetta Venford<br/>
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
