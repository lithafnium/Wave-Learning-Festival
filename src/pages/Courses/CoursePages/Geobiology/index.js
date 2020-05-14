import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import CourseImage from "../../headshot/geobiology-astrobiology.png"
import AnonymousProfile from "../../headshot/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Geobiology and Astrobiology</h1>
                  <p>
                  This course focuses on life in extreme environments on Earth and the search for life outside of Earth (read: aliens!). No prior experience necessary.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>W, 6/3, 4-5:30pm
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Juliana Drozd<br/>
                  <b>Teacher Bio: </b>I'm a rising junior at MIT majoring in Earth, Atmospheric, and Planetary Sciences, with a focus on geology and environmental systems, and minoring in biology. I'll be teaching a class on geobiology and astrobiology, looking at the most extreme life on Earth and how it can inform us in the search for life outside Earth! I'm incredibly passionate about the search for alien life, but I've learned that a lot of the life forms that you can find on Earth seem pretty alien already—they can survive in boiling pools of acid, in Antarctic lakes that have been frozen over for millions of years, and at the bottom of the ocean around underwater volcanoes. What are the limits for life as we know it and what does this extreme life on Earth mean about the possibility for life on planets completely different from our own? I hope to not only share some of the insanely cool science being done, but to inspire students to ask questions of their own about life and the universe. Apart from my own classes and my knowledge from those, I've worked in the Summons Lab at MIT, which is a geobiology and astrobiology lab, and the Astrobiology Analytical Lab at NASA Goddard, conducting research on biomarkers of microbial life and prebiotic chemistry. Outside of school and research, I'm an ice dancer and the president of the MIT Figure Skating Club!
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
