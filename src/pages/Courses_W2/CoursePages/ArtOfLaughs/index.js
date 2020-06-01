import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Phoebe Barr.png"

const CourseLaughs = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>The Art of Laughs: Writing Your First Stand-Up Comedy Set</h1>
                  <p>
                  Are you a fan of stand-up comedy? Do you love watching comedy shows and Netflix stand-up specials, and have you ever dreamed of writing your own routine? Novices to stand-up comedy can often feel unsure where to begin, not to mention worry about not being funny – but we all have comedic potential. This two-week course offers a low-stakes, supportive, and fun environment to learn the basics of stand-up comedy writing.
                  <br/>This is a participatory course; students will be encouraged to engage in discussions and to share jokes. Students of all ages are welcome to join, but the aim of the course is specifically for comedy beginners.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>June 16-June 27
                  <br/><b>Format: </b>Tuesday, Thursday, Saturday
                  <br/><b>Time (EDT): </b>2pm-3pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Phoebe Barr<br/>
                  <b>Teacher Bio: </b>Phoebe Barr is a rising sophomore at Harvard University (class of 2023) and an avid fan of stand-up comedy. She began performing in her junior year of high school and joined the Harvard University Stand-up Comedy Society in her first year of college. She has somehow managed to convince a large number of people that she's funny, and would love the opportunity to see if this epic grift also works on students over the internet. She knows a lot of facts about whales. Truly, an unconscionable amount.
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

export default CourseLaughs
