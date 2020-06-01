import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Chioma Ugochukwu.jpg"

const CoursePoetry = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Poetry for Self Expression</h1>
                  <p>
                  Everyone feels things. It's knowing why you feel the way you do that is the key to self-awareness. This course is designed to help you develop the key to unlock your deepest emotions. Using freeform writing, guided by particular styles of poetry; prose, free verse, haiku, etc this course aims to help you tap into those emotions. In these uncertain times, we may find ourselves feeling things such as loneliness, capriciousness, even anger. Poetry can help us channel this inner unrest into a creative outlet that can serve to bring us clarity and peace. I can't wait to write and share our poetry together. See you in the classroom,
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/20/2020
                  <br/><b>Time (EDT): </b> 5pm - 6pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Chioma Ugochukwu<br/>
                  <b>Teacher Bio: </b> Hello! My name is Chioma Ugochukwu, and I am an incoming sophomore at Harvard College. Everyone feels things. It's knowing why you feel the way you do  that is the key to self awareness. I started writing as a shy young girl to learn to express myself, as the youngest of my older brothers. It made me feel more intune with myself, and helped me to work through the complex emotions of adolescence. Soon I delved into poetry, and reading the works of Keats, Dickinson, Byron in class hooked me. I found that there was a release involved in this creative outlet. A release that came from not only producing your own writing, but in the reading and discussion of the works of others. With this release also comes understanding. And it is this understanding of one's self, and their emotions that I hope my students can gain from this class. 
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

export default CoursePoetry
