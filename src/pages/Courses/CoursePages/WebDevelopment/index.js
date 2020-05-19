import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import AnonymousProfile from "../../teacherheadshots/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Introduction to Website Development</h1>
                  <p>
                  Learn to develop a custom website on your own! No prior experience with web development necessary.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>WF, 5/31-6/5, 6:30-8pm EDT
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Ryan Cottone and Zachary Hauch<br/>
                  <b>Teacher Bio: </b>Ryan Cottone and Zachary Hauch are students hoping to help people new to website development build their skills.
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
