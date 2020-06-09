import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles.css";
import { Container, ContainerInner } from "@/globalStyles";

import Profile from "../../teacherheadshots/Kevin Bao.png";
import ProfileTwo from "../../teacherheadshots/Ian Zhang.png";

const CourseIntroCS = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>An Introduction to the Applications of Computer Science</h1>
          <p>
            This course will mainly focus on some of the applications of
            computer science. We will be covering topics such as objects,
            algorithms, data structures, and pathfinding algorithms. This is
            going to be a brief introduction into the world of computer science
            and no previous experience is required.
          </p>
          <p style={{ clear: "right" }}>
            <b>Class Date + Time: </b> June 16 - June 25
            <br />
            <b>Format: </b> Tuesday, Thursday, Saturdays
            <br />
            <b>Time (EDT): </b> 12pm - 1pm
          </p>
          <div class="bios">
            <div class="bio">
              <p>
                <img src={Profile} class="img-left" />
                <b>Taught by: </b>Kevin Bao
                <br />
                <b>Teacher Bio: </b>
                Hi my name is Kevin and I am a rising Senior at Gunn High
                school. I’m interested in the fields of computer science and
                Artificial Intelligence and I hope that I will be able to share
                what I have learned. I hope that I will be able to show a little
                bit of what computers can do and spark your interest in this
                field!
                <br />
                <br />
                <br />
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

export default CourseIntroCS;
