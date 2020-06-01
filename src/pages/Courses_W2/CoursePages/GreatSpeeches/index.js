import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../../../globalStyles'

import Profile from "../../teacherheadshots/Samarth Desai.jpeg"
import ProfileTwo from "../../teacherheadshots/Nick Danby.png"

const CourseGreatSpeeches = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>Great Speeches of History</h1>
                  <p>
                  This seminar will introduce students to some of the greatest speeches in world history. In each class, we will focus on one element of the human condition by reading and discussing a few short, accessible speeches. (The list includes everyone from JFK and MLK, to Queen Elizabeth and Abraham Lincoln, to Steve Jobs and Socrates.)
                  <br/>We will explore the historical background, subject, style, and impact of the speeches, as well as their relations to each other, to our world, and to our daily lives. The teachers will present a handful of public speaking “power points” in each class that will improve everyone’s public speaking abilities. Students will be encouraged to perform excerpts of the speeches, if interested.
                  <br/>The seminar is targeted toward high school students (incoming sophomores and up), but open to all students interested in rhetoric, history, and reading older speeches.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date: </b> 06/15/2020 - 06/26/2020
                  <br/><b>Format: </b> Monday, Wednesday, Friday
                  <br/><b>Time (EDT): </b> 4pm - 5:30pm
                  </p>
                  <p>
                  <img src={Profile} class="img-left"/>
                  <b>Taught by: </b>Samarth Desai<br/>
                  <b>Teacher Bio: </b>
                  Samarth is a 2020 graduate of Harvard College, having concentrated in Social Studies with a focus in constitutional law, American foreign policy, and political economy. At Harvard, he served as both President and Captain of the Harvard Mock Trial Association, co-founded the Alexander Hamilton Society, and wrote for the Harvard Political Review. He also worked as a Research Assistant to Harvard Law School professor Noah Feldman. He is a National Merit Scholar and the recipient of a Legislative Commendation from the Pennsylvania House of Representatives. His favorite movie speech is Al Pacino's in Scent of a Woman.
                  Nick Danby is a 2020 graduate of Harvard College, where he studied History and Government, with a focus on national security, foreign policy, and economic statecraft. At Harvard, Nick served as the Co-Founder and Chairman of the Alexander Hamilton Society, Editor-in-Chief of Tempus: The Historical Review, and Chairman of the Economic Policy Group. During his time at college, Nick worked for global consulting firms, government agencies, and think tanks. After graduation, Nick will be attending the University of Cambridge to receive his Master of Philosophy (MPhil) in International Relations in the fall and, then, commissioning as an active duty naval intelligence officer next summer. Nick’s public speaking career began at 12 when he addressed 2,000 people at the Maine Democratic Convention. Since then, he has been named the 2015 National Speech and Debate Association Congressional Debate Champion and 2017 American Mock Trial Association All-American Witness, among other achievements. His favorite movie speech is George C. Scott’s opening scene in Patton.
                  </p>
                  <p>
                  <img src={ProfileTwo} class="img-left"/>
                  <b>Taught by: </b>Nicholas Danby<br/>
                  <b>Teacher Bio: </b>
                  Nick Danby is a 2020 graduate of Harvard College, where he studied History and Government, with a focus on national security, foreign policy, and economic statecraft. At Harvard, Nick served as the Co-Founder and Chairman of the Alexander Hamilton Society, Editor-in-Chief of Tempus: The Historical Review, and Chairman of the Economic Policy Group. During his time at college, Nick worked for global consulting firms, government agencies, and think tanks. After graduation, Nick will be attending the University of Cambridge to receive his Master of Philosophy (MPhil) in International Relations in the fall and, then, commissioning as an active duty naval intelligence officer next summer. Nick’s public speaking career began at 12 when he addressed 2,000 people at the Maine Democratic Convention. Since then, he has been named the 2015 National Speech and Debate Association Congressional Debate Champion and 2017 American Mock Trial Association All-American Witness, among other achievements. His favorite movie speech is George C. Scott’s opening scene in Patton.
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

export default CourseGreatSpeeches
