import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/block-coding.jpg"
import AnonymousProfile from "../../headshot/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>How to Build an App with Block Coding</h1>
                  <p>
                  Learn how to build an app from scratch with block coding! Simpler than text coding, block coding is easy to pick up and no prior experience is necessary for this course. This course will run for 6 weeks.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>Sundays, 5/31-7/5, 4-5pm
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Yuan Sui<br/>
                  <b>Teacher Bio: </b>My name is Yuan Sui and I am a high school senior from Canada. This September, I plan to study Electrical and Computer Engineering at the University of Toronto. I have three years of programming experience, in Java and C++. I have also competed in competitions where my team and I build a functional app using block coding! Through this course, I want to share with students the joy of coding and I want to help students to actualize their ideas in real life. One fun fact about me is that I recently started to do book reviews on my social media account. 
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
