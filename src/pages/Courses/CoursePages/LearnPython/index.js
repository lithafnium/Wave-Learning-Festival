import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/learn-python.png"
import AnonymousProfile from "../../headshot/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                  <h1>Learn Python</h1>
                  <p>
                  <img src={CourseImage} class="img-right"/>
                  Learn Python is an introductory Python course that hopes to provide a support system to students new to the language, while also providing support for those who have experience but would like to improve their code.
                  </p>
                  <p style="clear:right">
                  <b>Class Date + Time: </b>
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Fatima-Zahra Chriha, Felician University ‘23<br/>
                  <b>Teacher Bio: </b>Hi! I'm Fatima-Zahra, yes that's my whole first name, Fatima-Zahra. I'm a second-year CS & Mathematics student at Felician University and the founder/president of Girls Who Code Chapter at FelicianU. I am also a student developer in the IT department of my university. I'm actually giving the same course to undergraduate students in my university during this break, in correlation with the Girls Who Code College loop. My goal is to provide you with a support system that you might never have in your high school. Someone to give you time to grasp knowledge, a community to collaborate with, and a person to return to, in order to get personalized feedback on how to improve your code.
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