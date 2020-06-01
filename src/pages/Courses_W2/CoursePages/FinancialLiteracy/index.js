import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Salma Kamni.jpg"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Coding through Activities</h1>
                  <p>
                  This course will provide students with the basic foundation of the study of anthropology. No prior experience necessary.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b> 06/15/2020 - 06/24/2020
                  <br/><b>Format: </b> Monday and Wednesday
                  <br/><b>Time (EDT): </b> 2:30 - 3:15 EDT 
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Ethar Hussein (she/her), Salma Kamni (she/her)<br/>
                  <b>Teacher Bio: </b>Cecelia Eure is part of the class of 2023 at The College of William and Mary. She is an introduction to anthropology because she wished that she had an opportunity to learn about anthropology as a subject long before she did. Today, she is double majoring in Anthropology and American Studies. Though she has never taught an anthropology class before, she taught theatre at a summer day camp in high school.
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
