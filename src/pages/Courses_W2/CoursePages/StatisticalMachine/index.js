import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

 import Profile from "../../teacherheadshots/Asher Noel.jpg"

const CourseStatisticalMachine = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Statistical Machine and Deep Learning in Natural Language Processing</h1>
                  <p>
                  Receive an introduction to the paradigm shift from statistical methods to deep learning in natural language over the past decade, covering advancements in conversation language understanding, dialogue systems, and natural language generation.
                  <br/><b>Target Audience: </b> All Grades
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/22/2020 - 07/13/2020
                  <br/><b>Format: </b> Monday
                  <br/><b>Time (EDT): </b> 6pm - 7pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Asher Noel (Harvard University '23)<br/>
                  <b>Teacher Bio: </b> Updated Soon!
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

export default CourseStatisticalMachine
