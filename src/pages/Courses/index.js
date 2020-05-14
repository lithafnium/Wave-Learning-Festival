import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './styles.css'

import DigitalPainting from "./headshot/digital-painting-photoshop.png"
import LearnCancer from "./headshot/how-cancer-works.jpg"
import LearnPython from "./headshot/learn-python.png"

const Courses = () => {
    return(
        <div>
            <Navbar/>
            <div class="container">
            <div class="row">
            <div class="column">
              <a href="course-digital-painting-with-photoshop">
                <div class="course">
                  <div class="image-container">
                    <img src={DigitalPainting} />
                  </div>
                  <p class="name">Digital Painting with Photoshop</p>
                  <p class="teacher">Yutong Liu, USC ‘21</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-how-cancer-works">
                <div class="course">
                  <div class="image-container">
                    <img src={LearnCancer}/>
                  </div>
                  <p class="name">How Cancer Works</p>
                  <p class="teacher">Madison Abbasi, Palo Alto High School ‘22</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-learn-python">
                <div class="course">
                  <div class="image-container">
                    <img src={LearnPython} />
                  </div>
                  <p class="name">Learn Python</p>
                  <p class="teacher">Fatima-Zahra Chriha, Felician University ‘23</p>
                </div>
              </a>
            </div>
            </div>
            </div>
            <div class="container">
              <div class="row">
              <div class = "row">
            <h1>Register by 5/23 to take a class in the first wave!</h1>
                <iframe
                title="form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdEci1eOpQ8IvYSFCxsgQOXfKL5LpJhZRWvfBLrrzAPrgyuZw/viewform?embedded=true"
                width="100%"
                height="500"
                frameborder="0"
                marginheight="0"
                marginwidth="0">Loading…</iframe>
                </div>
              </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Courses
