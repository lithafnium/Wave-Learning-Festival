import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Michael Kielstra.jpg"

const CourseGreatNumbers = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Three Great Numbers of Math</h1>
                  <p>
                  In this course, most appropriate for high-school students, we will consider mathematics through the lens of three numbers: 2 (the integers, even/odd parity, prime numbers, binary), the square root of 2 (rational numbers, irrational numbers, proof by contradiction, solving the quadratic), and i, the square root of -1 (complex numbers, solving the quadratic some more, the fundamental theorem of algebra).  By focusing on one number every lesson, students will be able to really explore the idea of *mathematics* as opposed to just calculation.
                  <br/><b>Target Audience: </b> 9th - 12th Graders
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/15/2020 - 06/19/2020
                  <br/><b>Format: </b> Monday, Wednesday, and Friday
                  <br/><b>Time (EDT): </b> 11am - 12pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Michael Kielstra<br/>
                  <b>Teacher Bio: </b>  I’m Michael Kielstra, a rising junior at Harvard studying math, and I'm teaching a course on three of the greatest numbers in history.  I hated mathematics from a very early age, until, at about fourteen years old, I had a teacher who showed me that it could be about more than a desperate grind to be the best in your class at memorizing formulae so you could get a job later on.  Memorizing formulae certainly does have its place – even now, I do it all the time – but mathematics as a field goes so far beyond that, and I'm extremely excited to tell you all about it.  Ask me about mathematics, Harvard, the Scout movement, being an international student, private school, homeschooling, science fiction, student journalism, and guacamole.
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

export default CourseGreatNumbers
