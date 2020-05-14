import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/geobiology-astrobiology.png"
import AnonymousProfile from "../../headshot/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Geobiology and Astrobiology</h1>
                  <p>
                  <img src={CourseImage} class="img-right"/>
                  This course focuses on life in extreme environments on Earth and the search for life outside of Earth (read: aliens!). No prior experience necessary. 
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>W, 6/3, 4-5:30pm
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Juliana Drozd<br/>
                  <b>Teacher Bio: </b>
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
