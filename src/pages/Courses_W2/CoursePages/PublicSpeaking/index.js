import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles.css";
import { Container, ContainerInner } from "@/globalStyles";

import Profile from "../../teacherheadshots/Kevin Xu.jpg";
import ProfileTwo from "../../teacherheadshots/Kelly Shen.jpg";

const CoursePublicSpeaking = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>How to be Persuasive: An Intro to the Art of Public Speaking</h1>
          <p>
            The goal of this course is to make students more confident and
            persuasive speakers. Over the course of four weeks, we will
            introduce students to effective strategies for persuasive
            communication, host hands-on practices with fellow classmates, and
            provide one-on-one feedback to each student. Students will also
            complete a final project where they will prepare a speech and
            present it to their fellow classmates.
            <br />
            <b>Target Audience: </b>6th to 9th Graders
            <br />
            <b>Max Class Size: </b>25
          </p>
          <p style={{ clear: "right" }}>
            <b>Class Date: </b>06/15/2020 - 07/02/2020
            <br />
            <b>Format: </b>Tuesday, Thursday
            <br />
            <b>Time (EDT): </b>7pm - 8:30pm
          </p>
          <div class="bios">
            <div class="bio">
              <p>
                <img src={Profile} class="img-left" />
                <b>Taught by: </b>Kevin Xu
                <br />
                <b>Teacher Bio: </b>My name is Kevin Xu, and I'm a rising junior
                at the University of Pennsylvania studying Computer Science and
                Healthcare Management. I'm from the Bay Area and enjoy eating,
                volunteering, and playing sports in my free time. I'm super
                excited to teach this class! I've been teaching speech and
                debate for a few years now, as an assistant coach at The Harker
                School and Science Leadership Academy in Philadelphia. I also
                competed in speech and debate for all my years in High School,
                doing reasonably well nationally! Feel free to ask any questions
                about speech or debate.
                <br />
                <br />
              </p>
            </div>
            <div class="bio">
              <p>
                <img src={ProfileTwo} class="img-left" />
                <b>Taught by: </b>Kelly Shen
                <br />
                <b>Teacher Bio: </b>My name is Kelly Shen, and I'm a rising
                sophomore at the University of Pennsylvania studying
                International Studies and Business. I'm from the Bay Area, and
                I've been spending my quarantine baking with my sister, learning
                how to play guitar, and reading. Having spent all of middle
                school and high school doing some form of speech or debate, I'm
                deeply passionate about the power of communication and the
                importance of public speaking. I'm excited to teach this class
                and work with students to develop their public speaking skills!
              </p>
            </div>
          </div>
          <h1>Register for this course!</h1>
          <iframe
            title="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeML1NrfKfCVFZ_HIYHGCrGcwJ0BX0C3wRaAcTS6zGBD0nDgQ/viewform?embedded=true"
            width="100%"
            height="500"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </ContainerInner>
      </Container>
      <Footer />
    </div>
  );
};

export default CoursePublicSpeaking;
