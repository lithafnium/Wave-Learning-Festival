import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/emotions.jpg"
import AnonymousProfile from "../../headshot/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Philosophy and Morality of Emotions</h1>
                  <p>
                  This philosophy course is an exploration of the five core emotions: happiness, anger, love, fear, and sadness. Students will discuss what they are, why they exist, and how we can interact with them.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>MWF, 5/25-6/5, 2-2:50pm
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Sophia Giegerich<br/>
                  <b>Teacher Bio: </b>I am a sophomore (rising junior) at Whitman College in Walla Walla, Wa and will be graduating in 2022. I am a philosophy major with a focus on compassion. I am particularly interested in how we can cultivate and promote compassion in society. This past semester I took a moral emotions philosophy course that deeply inspired me. We went over core emotions such as love, compassion, fear, anger, jealousy, disgust, and friendship, to name a few. I ended the class having a much deeper understanding of my own emotions. I have experience with tutoring. I was previously an English Language Fellow at my college, in which I helped international students with their reading and writing assignments, and I am currently a tutor at my college’s Center for Reading and Writing. In addition to having a passion for philosophy, I am also passionate about art, education, music, nature, and animals.  
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
