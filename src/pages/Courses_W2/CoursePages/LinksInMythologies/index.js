import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Annetta Venford.jpg"

const CourseLinksMythologies = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>The Links in Mythologies</h1>
                  <p>
                  This is a one day course exploring a few common themes seen in the mythologies of cultures across the globe, and what those common themes tell us about the values of those respective societies and how these values impacted their societies.
                  <br/><b>Target Audience: </b> All Grades
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/16/2020
                  <br/><b>Format: </b> Tuesday
                  <br/><b>Time (EDT): </b> 5pm - 6pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Annetta Venford<br/>
                  <b>Teacher Bio: </b> I am currently an incoming senior at Gunn High School (class of 2021) and mythology has long been a passion of mine. I was interested in finding connections between all the stories and better understanding what those connections told us about the respective societies. I hoped others would be curious as well!
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

export default CourseLinksMythologies
