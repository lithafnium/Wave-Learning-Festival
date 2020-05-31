import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import AnonymousProfile from "../../teacherheadshots/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>History’s Top Hits: An Introduction to the Great Works of Western Music</h1>
                  <p>
                  This course will cover not just 21st-century American musical hits, but will delve into the ‘greatest’ pieces of music of all time and what it means to hold that title.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>MWF, 5/25-6/5, 2-3pm EDT
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Justin Oei<br/>
                  <b>Teacher Bio: </b>A member of College of William and Mary’s class of 2023, Justin Oei is excited to share his knowledge and passion for music.
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
