import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Elizabeth Kinard.jpg"

const CourseIntroNeuroscience = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Intro to Neuroscience: Mind, Brain and Behavior</h1>
                  <p>
                  Every function in the human body, be it something as important as heart pumping, or something as trivial as foot tapping, comes down to the brain. In this course, we will cover the basic anatomy and physiology of the human brain, and what happens when certain parts of the brain malfunction. We will talk disorders, diseases, and how they are diagnosed and treated by physicians and other medical professionals. I look forward to teaching all of you!
                  <br/><b>Target Audience: </b>9th - 12th Graders
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/15/2020 - 06/26/2020
                  <br/><b>Format: </b> Monday, Wednesday, and Friday
                  <br/><b>Time (EDT): </b> 3pm - 4pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Elizabeth Kinard<br/>
                  <b>Teacher Bio: </b>My name is Elizabeth, and I am a rising junior at Harvard University (class of 2022), where I am majoring in neuroscience. Some other facts about me are that I also study German, and love to talk about all things film/music!
                  <br/>I chose to teach an intro course for neuroscience not only because that is what i am interested in and plan to make a career studying about, but also because I believe it is important to understand at least at a basic level, how we as humans think and function as a result of our brain activity. This course will cover basic anatomy, with a main focus on the connection between brain activity and resulting behaviors, and what happens when there is dysfunction in these neurological mechanisms. I look forward to sharing my passion for the human brain with everyone!
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

export default CourseIntroNeuroscience
