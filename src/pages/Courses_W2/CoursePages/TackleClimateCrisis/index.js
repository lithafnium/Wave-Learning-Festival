import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles.css";
import { Container, ContainerInner } from "@/globalStyles";

import Profile1 from "../../teacherheadshots/Charles Hua.jpg";
import Profile2 from "../../teacherheadshots/Kiana Ziadkhanpour.jpeg";

const CourseClimateCrisis = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>Developing Solutions to Tackle the Climate Crisis</h1>
          <p>
            In many ways, the 2015 Paris Agreement marked a turning point in
            international efforts to combat climate change. Yet, even with
            growing momentum for corporations and governments to achieve
            net-zero carbon emissions by 2050, much progress still needs to be
            made. A team of researchers based out of MIT and Climate Interactive
            recently developed the Climate EN-ROADS climate change solutions
            simulator, which allows users to test the carbon emissions reduction
            potential of different climate change solutions. In this course, we
            will have the opportunity to learn how different climate change
            mitigation solutions stack up against each other as we try to
            decarbonize our global economy to avoid the worst consequences of
            climate change.
          </p>
          <p style={{ clear: "right" }}>
            <b>Class Date: </b> June 15 - June 26
            <br />
            <b>Format: </b> Monday, Wednesday, and Friday
            <br />
            <b>Time (EDT): </b> 4pm - 5pm
          </p>
          <p>
            <div class="bios">
              <div class="bio">
                <p>
                  <img src={Profile1} class="img-left" />
                  <b>Taught by: </b>Charles Hua
                  <br />
                  <b>Teacher Bio: </b>My name is Charles Hua, and I'm a rising
                  junior at Harvard College (Class of 2022) majoring in
                  Statistics and Math with a minor in Energy and Environment.
                  I'm deeply passionate about sustainability and climate change;
                  having grown up in the Midwest (specifically Madison,
                  Wisconsin), I hold a deep appreciation for nature and
                  sustainability. At Harvard, I'm involved in environmental
                  consulting and serve on a subcommittee of the Presidential
                  Committee on Sustainability, and in high school, I helped
                  raise $150,000 to install solar panels at my high school. On
                  campus, I'm involved in environmental consulting, radio
                  broadcasting, student managing for the basketball team, and
                  photography. In my free time, I enjoy trying new restaurants,
                  playing basketball, watching Netflix, and listening to
                  podcasts.
                </p>
              </div>
              <div class="bio">
                <p>
                  <img src={Profile2} class="img-left" />
                  <b>Taught by: </b>Kiana Ziadkhanpour
                  <br />
                  <b>Teacher Bio: </b>Hi everyone! I'm Kiana, a rising junior at
                  Harvard College studying Molecular and Cellular Biology and
                  Environmental Science and Public Policy. I'm from Long Island,
                  New York and have been spending my quarantine running and
                  hiking through the trails by my home. I love listening to
                  music (mostly every genre), trying out new recipes, and lately
                  I've been trying my best to learn the guitar. I'm incredibly
                  passionate about sustainability and can't wait to co-lead an
                  interactive course about tackling the climate crisis, an issue
                  that I care deeply about.
                </p>
              </div>
            </div>
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

export default CourseClimateCrisis;
