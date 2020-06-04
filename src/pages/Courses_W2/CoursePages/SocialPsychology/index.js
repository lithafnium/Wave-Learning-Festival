import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Claire Garrett.JPG"

const CoursePsychology = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>A Crash Course in Social Psychology</h1>
                  <p>
                  This course provides students with a broad introduction to the field of social psychology, the study of how others influence our thoughts, feelings, and behavior in a social world. Course content will focus on both theory and empirical research to explore the ways in which social situations affect the way we think, our emotions, and our actions. Specific topics include social perception and judgment, attitude and attitude change, persuasion, conformity, liking and love, and helping. In the course of discussing these topics, students will analyze real-life situations and events. Some of these events may be disturbing or upsetting, so please keep this in mind before enrolling.
                  <br/><b>Target Audience: </b>This class is appropriate for high school students, and no prerequisites are necessary.
                  <br/><b>Max Class Size: </b>50
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/15/2020 - 06/26/2020
                  <br/><b>Format: </b>Monday, Wednesday, Friday
                  <br/><b>Time (EDT): </b> 1pm - 2pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Claire Garret<br/>
                  <b>Teacher Bio: </b>Hi! My name is Claire and I am from Seattle, WA. I am a 2020 graduate of Whitman College where I studied psychology. One of my all-time favorite classes was social psychology. I found the topics in that class interesting since many directly relate to our everyday lives as social beings. While some findings are intuitive, others might surprise you! My social psychology class also taught me a few tips and tricks which have been very useful, both personally and professionally. Outside of class, I love spending time with friends and family, listening to music, reading, travelling, watching movies, and photography.
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

export default CoursePsychology
