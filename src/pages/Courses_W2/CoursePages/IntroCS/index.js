import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Kevin Bao.png"
import ProfileTwo from "../../teacherheadshots/Ian Zhang.png"

const CourseIntroCS = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>An Introduction to the Applications of Computer Science</h1>
                  <p>
                  This course will mainly focus on some of the applications of computer science. We will be covering topics such as objects, algorithms, data structures, and pathfinding algorithms. This is going to be a brief introduction into the world of computer science and no previous experience is required.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b> 06/16/2020 - 06/25/2020
                  <br/><b>Format: </b> Tuesday, Thursday
                  <br/><b>Time (EDT): </b> 12pm - 1pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Kevin Bao<br/>
                  <b>Teacher Bio: </b>
                  Hi my name is Kevin and I am a rising Senior at Gunn High school. I’m interested in the fields of computer science and Artificial and I hope that I will be able to share what I have learned. I hope that I will be able to show a little bit of what computers can do and spark your interest in this field!
                  </p>
                  <p>
                  <img src={ProfileTwo} class="img-left"/>
                  <b>Taught by: </b>Ian Zhang<br/>
                  <b>Teacher Bio: </b>
                  Howdy! My name is Ian, and I'm a rising senior at Gunn High School with experience in coding in various languages, namely Java, Python and Scheme. My interest in CS stemmed last year after being involved in Gunn Hacks and taking AP CS A. Since then, I have worked on various coding projects with my friends such as a school work planner. I am really looking forward to teaching this class!
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

export default CourseIntroCS
