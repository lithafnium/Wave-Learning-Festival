import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/explosives.png"
import AnonymousProfile from "../../teacherheadshots/Kristin Kiley.jpg"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>The Chemistry of Explosives</h1>
                  <p>
                  This course will cover the basics of how explosives work, and the chemistry behind them.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>TR, 5/26-6/4, 10-11am EDT
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Kristen Kiley<br/>
                  <b>Teacher Bio: </b>Hi! My name is Kristin Kiley. I'm a first-year student at Harvard studying Chemistry and Russian (and who knows what else!). I love teaching Chemistry, I've been a tutor for many years and was a teaching assistant for AP Chemistry in high school. What's cooler about chemistry than explosions?? A few fun facts about me: my DNA is in space and I compete on the Harvard Curling team!
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
