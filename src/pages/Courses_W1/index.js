import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import './styles.css'
import {Colors, Typography} from "../../styles";

import LearnCancer from "./headshot/how-cancer-works.jpg"
import LearnPython from "./headshot/learn-python.png"
import Anthropology from "./headshot/anthropology.png"
import BlockCoding from "./headshot/block-coding.png"
import Emotions from "./headshot/emotions.png"
import Explosives from "./headshot/explosives.png"
import Geobiology from "./headshot/geobiology-astrobiology.png"
import PublicTransit from "./headshot/public-transit.png"
import ShortStories from "./headshot/short-stories.png"
import SignLanguage from "./headshot/sign-language.png"
import WesternMusic from "./headshot/western-music.png"

const Courses = () => {
    return(
        <div>
            <Navbar/>
            <Container>
            <ContainerInner>
            <Typography.BodyText style={{color: Colors.WLF_BLACK}}>
              For our inaugural wave, we are excited to offer 11 courses across a variety of subjects. Our volunteer educators have worked hard to prepare engaging and thoughtful curricula, and can't wait to share their passions with you. Click each course for more info, and feel free to send any questions to <a href="mailto:wavelf.logistics@gmail.com">wavelf.logistics@gmail.com</a>.
            </Typography.BodyText>
            <div class="container">
            <div class="row">
            <div class="column">
              <a href="course-how-cancer-works">
                <div class="course">
                  <div class="image-container">
                    <img src={LearnCancer}/>
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>How Cancer Works</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Madison Abbasi</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>Palo Alto High School</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-learn-python">
                <div class="course">
                  <div class="image-container">
                    <img src={LearnPython} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>Learn Python</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Fatima-Zahra Chriha</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>Felician University ‘23</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-short-stories">
                <div class="course">
                  <div class="image-container">
                    <img src={ShortStories} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>Starting Short Stories</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Annetta Venford</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>Henry M Gunn High School '21</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-anthropology">
                <div class="course">
                  <div class="image-container">
                    <img src={Anthropology} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>What Even is Anthropology?</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Cecelia Eure</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>College of William & Mary '23</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-sign-language">
                <div class="course">
                  <div class="image-container">
                    <img src={SignLanguage} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>Introduction to American Sign Language</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Emma Doughty</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>University at Buffalo '24</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-geobiology-astrobiology">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>Geobiology and Astrobiology</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Juliana Drozd</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>Massachusetts Institute of Technology '22</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-western-music">
                <div class="course">
                  <div class="image-container">
                    <img src={WesternMusic} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>History’s Top Hits: An Introduction to the Great Works of Western Music</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Justin Oei</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>College of William and Mary '23</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-explosives">
                <div class="course">
                  <div class="image-container">
                    <img src={Explosives} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>The Chemistry of Explosives</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Kristen Kiley</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>Harvard College '23</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-public-transportation">
                <div class="course">
                  <div class="image-container">
                    <img src={PublicTransit} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>Public Transportation and Urban Planning</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Perrin Price</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>Harvard College '23</Typography.BodyText>
                </div>
              </a>
            </div>
            {/*
            <div class="column">
              <a href="course-web-development">
                <div class="course">
                  <div class="image-container">
                    <img src={WebDevelopment} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>Introduction to Website Development</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Ryan Cottone and Zachary Hauch</Typography.BodyText>
                </div>
              </a>
            </div>
            */}
            <div class="column">
              <a href="course-emotions">
                <div class="course">
                  <div class="image-container">
                    <img src={Emotions} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>Philosophy and Morality of Emotions</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Sophia Giegerich</Typography.BodyText>
                  <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>Whitman College '22</Typography.BodyText>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-block-coding">
                <div class="course">
                  <div class="image-container">
                    <img src={BlockCoding} />
                  </div>
                  <Typography.Header2 style={{color: Colors.WLF_BLACK}}>How to Build an App with Block Coding</Typography.Header2>
                  <Typography.BodyText style={{fontSize: 16}}>Yuan Sui</Typography.BodyText>
                </div>
              </a>
            </div>
        </div>
        </div>
        <Typography.Header style={{color: Colors.WLF_PURPLE}}>Course Schedule</Typography.Header>
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=8tk6cntof4tuog58lv572ikcp4%40group.calendar.google.com&ctz=America%2FBoston" 
            style={{'border': '0px', 'width':'100%', 'height':'600px', 'frameborder':'0px', 'scrolling':'no'}}>
          </iframe>  
          <Typography.Header style={{color: Colors.WLF_PURPLE, marginTop: 50}}>Register by 5/23 to take a class in the first wave!</Typography.Header>
	        <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 50}}>
            Sign-ups are on a first-come-first-serve basis. If you are unavailable for this wave, sign up for <a href = "www.wavelf.org/#newsletter">updates</a> to be the first to register for future waves!
          </Typography.BodyText>
            <iframe
              title="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdEci1eOpQ8IvYSFCxsgQOXfKL5LpJhZRWvfBLrrzAPrgyuZw/viewform?embedded=true"
              width="100%"
              height="400"
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
