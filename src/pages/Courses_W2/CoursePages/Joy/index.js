import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles.css";
import { Container, ContainerInner } from "@/globalStyles";

import Profile from "../../teacherheadshots/Abby McElroy.jpg";

const CourseJoy = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>Where and Why is Joy?</h1>
          <p>
            This course will seek to answer, from a variety of philosophical and
            scientific standpoints, why and how humans experience joy, with an
            emphasis on finding ways to increase joyful moments while stuck in
            quarantine.
            <br />
            <b>Max Class Size: </b>30
          </p>
          <p style={{ clear: "right" }}>
            <b>Class Date: </b>06/15/2020 - 06/24/2020
            <br />
            <b>Format: </b> Monday, Wednesday
            <br />
            <b>Time (EDT): </b> 7pm - 8pm
          </p>
          <p>
            <img src={Profile} class="img-left" />
            <b>Taught by: </b> Abby McElroy
            <br />
            <b>Teacher Bio: </b>Abby McElroy just finished her freshman year at
            Harvard College, where she lived in Pennypacker Hall. She is
            passionate about social justice, interfaith work, and, of course,
            joy! She has always looked for ways to maximize joy, and she even
            runs an email list called Joy is My Favorite Word. During
            quarantine, she has been taking lots of long walks, reading, and
            doing puzzles with her family.
          </p>
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

export default CourseJoy;
