import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/short-stories.png"
import AnonymousProfile from "../../teacherheadshots/Annetta Venford.jpg"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                  <h1>Starting Short Stories</h1>
                  <p>
                  This course will provide students with tips on writing, getting past writer’s block, varying writing, changing voice, and understanding story pace.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>MWF, 5/25-5/29, 5-6:30pm EDT
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Annetta Venford<br/>
                  <b>Teacher Bio: </b>I am currently a junior at Henry M. Gunn High School (class of 2021). I was interested in teaching a class on short stories after seeing how many of my friends struggled in writing theirs for assignments, and I wanted to try to help others and see how being more analytical of writing in general will help me with my own stories. I have always loved writing - anything from poetry to essays to stories - and I know that my writing has significantly improved during my high school years; I wanted to share what I've learned with those about to enter high school. Several of my poems have now been published in anthology books, and I only hope to continue with that as my writing grows with me.
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
