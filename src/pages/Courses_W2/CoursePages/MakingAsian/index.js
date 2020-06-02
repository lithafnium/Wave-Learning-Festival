import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile1 from "../../teacherheadshots/Larry Dang.JPG"
import Profile2 from "../../teacherheadshots/Shuxin Zhou.jpg"

const CourseMakingAsian = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Making Asian America: An Exploration Through Hit Comedy Fresh Off the Boat</h1>
                  <p>
                  Making Asian America is a 2 week introduction to Asian American studies through the lens of Fresh Off the Boat, the hit ABC comedy. We’ll explore themes like the American Dream and fitting in as a minority, spend class using the show as a springboard to discuss the world around us, and most importantly watch TV for homework. The course is a friendly way to start critically thinking about Asian American identity. People of all races and ethnicities are welcome.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/15/2020 - 06/26/2020
                  <br/><b>Format: </b> Monday, Wednesday, and Thursday
                  <br/><b>Time (EDT): </b> 8pm - 9pm
                  </p>
                  <p>
                  <div class="bios">
                    <div class="bio">
                      <p>
                      <img src={Profile2} class="img-left"/>
                      <b>Taught by: </b>Shuxin Zhou<br/>
                      <b>Teacher Bio: </b> Shuxin was born in China and grew up in the San Francisco Bay Area. She loves eating food, watching anime, and taking naps whenever she gets a break from working on code or doing write ups as a Computer Science and Sociology major. She’s excited to have interesting conversations on Asian American topics/issues and watch Fresh Off the Boat again.
                      </p>
                    </div>
                    <div class="bio">
                      <p>
                      <img src={Profile1} class="img-left"/>
                      <b>Taught by: </b>Larry Dang<br/>
                      <b>Teacher Bio: </b> Larry also grew up in the San Francisco Bay Area and is the son of Vietnam War refugees. He was in college but then life happened. Quarantine is #feelsbad, but he’s trying. He used to run and eat at local restaurants, but now he games and pretends he’s on Masterchef, which is cool too. No sourdough, though, cos he’s not fast enough to buy yeast. He’s also excited to meet the class and learn together!
                      </p>
                    </div>
                  </div>
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

export default CourseMakingAsian
