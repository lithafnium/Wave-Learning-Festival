import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import AnonymousProfile from "../../teacherheadshots/Madison Abbassi.jpg"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                  <h1>How Cancer Works</h1>
                  <p>
                  How Cancer Works is a course dedicated to understanding the fundamentals of cancer, a debilitating disease that affects millions of people annually.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>MWF, 5/25-6/5, 7:45-8:30pm EDT
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Madison Abbassi, Palo Alto High School ‘22<br/>
                  <b>Teacher Bio: </b>Hi, I'm Madison! I'm a student at Palo Alto High School (Class of 2022) who loves science. I'm teaching this course because I truly believe that our generation will be the one that cures cancer and it is never too early to start learning. Cancer biology is a fascinating topic to explore and very important to understand, as cancer affects millions around the world. I hold course certifications in cancer biology from Johns Hopkins University and thoracic oncology from the University of Michigan, so I'm really excited to spread the knowledge. In my free time, I like to swim, watch old Twilight Zone episodes, and try new baking projects with my younger sister.
                  </p>
                  <h1>Register for this course!</h1>
                    <iframe
                      title="form"
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdEci1eOpQ8IvYSFCxsgQOXfKL5LpJhZRWvfBLrrzAPrgyuZw/viewform?embedded=true"
                      width="100%"
                      height="500"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0">Loading…
                    </iframe>
              </ContainerInner>
            </Container>
            <Footer/>
        </div>
    )
}

export default CoursePage
