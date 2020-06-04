import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Elizabeth Truchan.png"

const CourseComputerSecurity = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Intro to Computer Security: How to Protect Your Data</h1>
                  <p>
                  Today it seems like you never know who is watching what you browse on the internet or send to your friends. Learn the most common ways that hackers can infiltrate your computer and and your communications and some things you can do to protect yourself from them. Topics such as password cracking, email phishing, the Tor browser, and others will be discussed.
                  <br/><b>Target Audience: </b> Geared towards high schoolers with a basic knowledge of how to use a computer. ​
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/22/2020 - 06/26/2020
                  <br/><b>Format: </b> Monday, Wednesday, and Friday
                  <br/><b>Time (EDT): </b> 2pm - 3pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Elizabeth Truchan<br/>
                  <b>Teacher Bio: </b> Most people call me Boof, and I am graduating from MIT with a degree in Electrical Engineering and Computer Science this May 2020. I love computer systems and security and have taken classes in the fields, and I would like to pass on some helpful, practical knowledge on computer security and protecting your data.
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

export default CourseComputerSecurity
