import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import './styles.css'

import Geobiology from "./headshot/geobiology-astrobiology.png"

const Courses = () => {
    return(
        <div>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>
              For our inaugural wave, we are excited to offer 25 courses across a variety of subjects. Our volunteer educators have worked hard to prepare engaging and thoughtful curricula, and can't wait to share their passions with you. Click each course for more info, and feel free to send any questions to <a href="mailto:wavelf.logistics@gmail.com">wavelf.logistics@gmail.com</a>.
            </p>
            <div class="container">
            <div class="row">
            
            <div class="column">
              <a href="course-coding-activities">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Coding through Activities</p>
                  <p class="teacher">Ethar Hussein (she/her), Salma Kamni (she/her)</p>
                </div>
              </a>
            </div>
        </div>
        </div>
        <h1>Course Schedule</h1>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8tk6cntof4tuog58lv572ikcp4%40group.calendar.google.com&ctz=America%2FBoston"
            style={{'border': '0px', 'width':'100%', 'height':'600px', 'frameborder':'0px', 'scrolling':'no'}}>
          </iframe>
        <h1>Register by 6/13 to take a class in the first wave!</h1>
	<p>Sign-ups are on a first-come-first-serve basis. If you are unavailable for this wave, sign up for <a href = "www.wavelf.org/#newsletter">updates</a> to be the first to register for future waves!</p>
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

export default Courses
