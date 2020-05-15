import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "./styles.js"
import './styles.css'

import DigitalPainting from "./headshot/digital-painting-photoshop.png"
import LearnCancer from "./headshot/how-cancer-works.jpg"
import LearnPython from "./headshot/learn-python.png"
import Joy from "./headshot/joy.png"
import Anthropology from "./headshot/anthropology.png"
import BlockCoding from "./headshot/block-coding.jpg"
import Emotions from "./headshot/emotions.jpg"
import Explosives from "./headshot/explosives.png"
import Geobiology from "./headshot/geobiology-astrobiology.png"
import PublicTransit from "./headshot/public-transit.png"
import ShortStories from "./headshot/short-stories.png"
import SignLanguage from "./headshot/sign-language.png"
import WebDevelopment from "./headshot/web-development.png"
import WesternMusic from "./headshot/western-music.png"

const Courses = () => {
    return(
        <div>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>
              For our inaugural wave, we are excited to offer 14 courses across a variety of subjects. Our volunteer educators have worked hard to prepare engaging and thoughtful curricula, and can't wait to share their passions with you. Click each course for more info, and feel free to send any questions to <a href="mailto:wavelf.logistics@gmail.com">wavelf.logistics@gmail.com</a>.
            </p>
            <div class="container">
            <div class="row">
            <div class="column">
              <a href="course-digital-painting">
                <div class="course">
                  <div class="image-container">
                    <img src={DigitalPainting} />
                  </div>
                  <p class="name">Digital Painting with Photoshop</p>
                  <p class="teacher">Yutong Liu</p>
                  <p class="school">USC ‘21</p>
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
                  <p class="teacher">Madison Abbasi</p>
                  <p class="school">Palo Alto High School ‘22</p>
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
                  <p class="teacher">Fatima-Zahra Chriha</p>
                  <p class="school">Felician University ‘23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-joy">
                <div class="course">
                  <div class="image-container">
                    <img src={Joy} />
                  </div>
                  <p class="name">Where and Why is Joy?</p>
                  <p class="teacher">Abby McElroy</p>
                  <p class="school">Harvard University '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-short-stories">
                <div class="course">
                  <div class="image-container">
                    <img src={ShortStories} />
                  </div>
                  <p class="name">Starting Short Stories</p>
                  <p class="teacher">Annetta Venford</p>
                  <p class="school">Henry M Gunn High School '21</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-anthropology">
                <div class="course">
                  <div class="image-container">
                    <img src={Anthropology} />
                  </div>
                  <p class="name">What Even is Anthropology?</p>
                  <p class="teacher">Cecilia Eure</p>
                  <p class="school">College of William & Mary '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-sign-language">
                <div class="course">
                  <div class="image-container">
                    <img src={SignLanguage} />
                  </div>
                  <p class="name">Introduction to American Sign Language</p>
                  <p class="teacher">Emma Doughty</p>
                  <p class="school">University at Buffalo '24</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-geobiology-astrobiology">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Geobiology and Astrobiology</p>
                  <p class="teacher">Juliana Drozd</p>
                  <p class="school">Massachusetts Institute of Technology '22</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-western-music">
                <div class="course">
                  <div class="image-container">
                    <img src={WesternMusic} />
                  </div>
                  <p class="name">History’s Top Hits: An Introduction to the Great Works of Western Music</p>
                  <p class="teacher">Justin Oei</p>
                  <p class="school">College of William and Mary '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-explosives">
                <div class="course">
                  <div class="image-container">
                    <img src={Explosives} />
                  </div>
                  <p class="name">The Chemistry of Explosives</p>
                  <p class="teacher">Kristen Kiley</p>
                  <p class="school">Harvard College '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-public-transportation">
                <div class="course">
                  <div class="image-container">
                    <img src={PublicTransit} />
                  </div>
                  <p class="name">Public Transportation and Urban Planning</p>
                  <p class="teacher">Perrin Price</p>
                  <p class="school">Harvard College '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-web-development">
                <div class="course">
                  <div class="image-container">
                    <img src={WebDevelopment} />
                  </div>
                  <p class="name">Introduction to Website Development</p>
                  <p class="teacher">Ryan Cottone and Zachary Hauch</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-emotions">
                <div class="course">
                  <div class="image-container">
                    <img src={Emotions} />
                  </div>
                  <p class="name">Philosophy and Morality of Emotions</p>
                  <p class="teacher">Sophia Giegerich</p>
                  <p class="school">Whitman College '22</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-block-coding">
                <div class="course">
                  <div class="image-container">
                    <img src={BlockCoding} />
                  </div>
                  <p class="name">How to Build an App with Block Coding</p>
                  <p class="teacher">Yuan Sui</p>
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
            </ContainerInner>
          </Container>
            <Footer/>
        </div>
    )
}

export default Courses
