import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles.css";
import { Container, ContainerInner } from "@/globalStyles";

import Profile from "../../teacherheadshots/Maria Estrada.jpeg";

const CourseFinancialLiteracy = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>Securing the Bag: Budgeting 101</h1>
          <p> Navigating “real-world” finances can be challenging and convoluted, so familiarity with budgeting is pivotal to long-term fiscal independence. We will introduce the ins-and-outs of loans, checking, saving, and credit bank accounts. How can you utilize tools at your disposal to secure the <i>future bag?</i></p>
          <p style={{ clear: "right" }}>
            <b>Class Date: </b> 06/16/2020 - 06/25/2020
            <br />
            <b>Format: </b> Tuesday, Thursday
            <br />
            <b>Time (EDT): </b> 4pm - 5pm 
          </p>
          <p>
            <img src={Profile} class="img-left" />
            <b>Taught by: </b>Maria Fernanda Estrada, Onder Kilinc
            <br />
            <b>Teacher Bio: </b>Hello, my name is Maria Estrada and I am a
            rising sophomore at Williams College. I am teaching this course
            because growing up as a first-generation student, financial literacy
            has proven to be of the utmost importance. The skills I aim to
            promote will be important for the rest of the students' lives as
            they navigate budgeting and financial skills. I hope to bring
            awareness to the existent financial literacy gap among the youth. I
            enjoy reading, listening to podcasts, and cooking!
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

export default CourseFinancialLiteracy;
