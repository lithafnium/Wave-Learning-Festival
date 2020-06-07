import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles.css";
import { Container, ContainerInner } from "@/globalStyles";

import Profile from "../../teacherheadshots/Angel Mata.jpeg";

const CourseKanyeWest = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>
            From "Jesus Walks" to "Jesus is King": The Discography of Kanye West
          </h1>
          <p>
            Kanye West once called himself the "greatest human artist of all
            time." Over the course of the next two weeks, we will break down his
            entire musical discography, looking at his music through the lens of
            both literary and musical criticism, and also as historical objects.
            We will look at recurring themes in his lyricism and even some of
            his other ventures, such as the world of fashion with his
            billion-dollar "Yeezy" brand.
            <br />
            <b>Target Audience: </b> Due to some of the mature content in his
            music, this course is recommended for high school students but is
            open to anybody with parent's permission.
          </p>
          <p style={{ clear: "right" }}>
            <b>Class Date: </b> 06/15/2020 - 06/26/2020
            <br />
            <b>Format: </b> Monday, Tuesday, Wednesday, Thursday, Friday
            <br />
            <b>Time (EDT): </b> 12pm - 1pm
          </p>
          <p>
            <img src={Profile} class="img-left" />
            <b>Taught by: </b>Angel Mata
            <br />
            <b>Teacher Bio: </b>My name is Angel Antonio Mata and I am a rising
            junior at Harvard studying a joint concentration between History of
            Science and Comparative Literature. I study the potential
            opportunities and effects of new digital technologies, whether
            that's the emergence of a metaverse as a result of our increasingly
            digitized world or new multimedia art forms only possible with the
            tools available to artists in our computer society. I love being
            involved in theatre and creative writing and I also serve as a Head
            Delegate for our Model UN team. I will be teaching a course on the
            discography of Kanye West where we will be looking at his work as
            both a historical and cultural object, learning critical close
            reading and contextualization skills.
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

export default CourseKanyeWest;
