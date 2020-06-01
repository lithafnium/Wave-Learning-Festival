import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Willow Taylor Chiang Yang.jpg"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Campaigns and Elections 101</h1>
                  <p>
                  Ever been confused about the difference between PACs and superPACs or delegates and superdelegates? Wondered what "election fraud" actually entails? Attempted to puzzle through an article that throws around political vocabulary you just don't quite get? This course will give you all the bare-bones information you need to know about campaigns and elections, presidential and otherwise! The goal of the course is to provide you with the basis to understand those articles and podcasts so that you can critically think about the larger concepts during this election year. While there are no prerequisites or minimum grade requirements, it is strongly encouraged to have a rudimentary understanding of the US government and to be somewhat caught up in political news. Please feel free to email me if you have any questions or comments! (willowtaylorcy@gmail.com)
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/15/2020 - 06/26/2020
                  <br/><b>Format: </b> Monday, Wednesday, Friday
                  <br/><b>Time (EDT): </b> 2pm - 3pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Willow Taylor Chiang Yang<br/>
                  <b>Teacher Bio: </b> Willow Taylor Chiang Yang is a rising high school senior at The Nueva Upper School in San Mateo, CA, where she is the Editor-in-Chief of the student newspaper as well as the Student Council President. She has worked with Congresswoman Jackie Speier and current CA state treasurer John Chiang on his past gubernatorial campaign. She currently interns for incumbent Congressman Josh Harder's campaign in Modesto. Chiang Yang has also been published by Ms. magazine both in print and online, and was a Senior Project Reporter for the award-winning Since Parkland Project.
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
