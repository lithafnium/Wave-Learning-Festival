import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '@/globalStyles'

import Profile from "../../teacherheadshots/Margaret Lu.JPG"

const CourseCinema = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>An Overview of American Cinema: 1945 - Present</h1>
                  <p>
                  Margaret’s course “An Overview of American Cinema: 1945 - Present” studies some of the greatest and most influential films in the history of the United States. Directors that will be watched and discussed range from Alfred Hitchcock to Francis Ford Coppola, and our analysis will explore the aesthetic, historical, and cultural significance of their cinematic masterpieces. Ultimately, this course aims to both increase students’ knowledge of cinematic history and their capacity for artistic appreciation.
                  <br/><b>Target Audience: </b>9th - 12th Graders
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/16/2020 - 06/27/2020
                  <br/><b>Format: </b> Tuesday, Thursday, Saturday
                  <br/><b>Time (EDT): </b> 1pm - 2pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Margaret Lu<br/>
                  <b>Teacher Bio: </b>Margaret is an undergraduate student in the University of Pennsylvania’s Class of 2022 originally from Vancouver, Canada. Her tremendous lifelong passion for literature and film has followed her since her early childhood. Margaret has won international awards for her short films produced in high school and is currently involved in professional film projects. Apart from her creative work, Margaret may be found playing the violin, volunteering with children, or being a huge foodie as always.
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

export default CourseCinema
