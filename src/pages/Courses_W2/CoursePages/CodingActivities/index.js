import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Salma Kamni.jpg"

const CourseCodingActivities = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Coding through Activities</h1>
                  <p>
                  This course will provide students with the basic foundation of the study of anthropology. No prior experience necessary.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b> 06/15/2020 - 06/24/2020
                  <br/><b>Format: </b> Monday and Wednesday
                  <br/><b>Time (EDT): </b> 2:30 - 3:15 EDT
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Ethar Hussein (she/her), Salma Kamni (she/her)<br/>
                  <b>Teacher Bio: </b>Ethar:
                    Hi! I'm Ethar Hussein. I am a senior graduate from Amos Alonzo Stagg High School. I am teaching this course to help others learn the basics of coding, advice about STEM because I would have wished to have this opportunity when I was younger. I am very passionate about coding and I love to help others grow. I enjoy coding because I can create anything I want and can combine it with my other interests. I have taken AP Computer Science Principles and AP Computer Science Java classes. I am an NHS, Science NHS, and Mu Alpha Theta member in High School. I tutored math for 2 years and was a tech intern. I addition, I am an NCWIT member. I graduated from the Girls Who Code Summer Immersion program and am a Congressional App Winner. I also like to learn, read, code, paint, and draw in my free time.
                    <br/>Salma:
                    Hi, I’m Salma and I am a rising freshman at Stanford University! I’m interested in language learning, reading, political science, and how Computer Science intersects with all of those subjects! Computer Science exposed me to new opportunities and avenues of analysis, so I hope that I can show you all the same through this course!
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

export default CourseCodingActivities
