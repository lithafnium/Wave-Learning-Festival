import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Kylee Carden.jpg"

const CoursePhysics = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Physics: From Newton to Relativity, Black Holes, Inflation, the Universe and Beyond</h1>
                  <p>
                  Howdy! This class will introduce the fundamentals of physics and use these basic concepts to understand complicated, buzz-word topics in physics like black holes and the expansion of the universe. This class is designed to be fun and intuitive, and we will dive deep to see beauty in physics! While this class will include mathematical derivations, the main goal of the class is to build physical intuition and introduce students to concepts they will see in future physics courses.
                  <br/>Required: algebra, trigonometry, intro physics (middle school level acceptable)
                  <br/>Recommended: basic calculus
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/15/2020 - 06/26/2020
                  <br/><b>Format: </b> Monday Wednesday Friday
                  <br/><b>Time (EDT): </b> 7pm - 8:30pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b> Kylee Carden
                  <br/>
                  <b>Teacher Bio: </b>I am Kylee, a student at MIT in the Class of 2023! I am teaching my course on physics because I believe that an intuitive understanding of fundamentals can allow anyone to understand complex topics such as inflation, the expansion of the universe, and black holes. As for my background, I am a physics major at MIT and have taken courses on E&M, astrophysics, mechanics, and relativity. Some fun facts are that I love country music, gardening peppers, and traveling across Georgia to visit state parks!
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

export default CoursePhysics
