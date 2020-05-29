import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import AnonymousProfile from "../../teacherheadshots/Perrin Price.jpg"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Public Transportation and Urban Planning</h1>
                  <p>
                  This course will introduce students to public transportation and urban planning, exploring the importance of both through a case study of Boston’s public transportation system.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>MWF, 6/1-6/5, 4-5pm EDT
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Perrin Price<br/>
                  <b>Teacher Bio: </b>Perrin Price is an undergraduate at Harvard University, Class of 2023. She will be teaching a course about public transportation. She has a passion for public transportation and has experience working in public transit as an intern at the MBTA (Massachusetts Bay Transportation Authority). She has also worked on two academic projects surrounding the public transportation in Boston. Perrin also loves to sing, cook, and work with kids! She hopes to connect with students who share an interest in public transportation and love learning and being creative!
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
