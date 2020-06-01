import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Lizzie Letsou.jpg"

const CourseCoronaAnxiety = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Corona and Anxiety</h1>
                  <p>
                  This is an online course that deals with the issue of mental illness, as it relates to the current worldwide pandemic, on a personal and intellectual level.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/22/2020 - 06/26/2020
                  <br/><b>Format: </b> Monday, Wednesday, and Friday
                  <br/><b>Time (EDT): </b> 11am - 12pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Lizzie Letsou<br/>
                  <b>Teacher Bio: </b> Hi! My name is Lizzie, and I am a rising sophomore at Williams College, potentially double majoring in English and Psychology. I am teaching this course because I believe it focuses on two of the most pressing issues we are faced with today: corona and anxiety. We will discuss why we feel what we feel, how to cope with our emotions in a healthy way, and some of the social implications and stigma surrounding mental health issues. This course is best suited for high schoolers, especially those who feel overwhelmed by everything from the abrupt transition to online learning and social distancing to college applications.
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

export default CourseCoronaAnxiety
