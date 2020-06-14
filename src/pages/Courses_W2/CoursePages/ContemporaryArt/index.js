import React from "react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import "../styles.css";
import { Container, ContainerInner } from "@/globalStyles";

import Profile from "../../teacherheadshots/Karly Hou.JPG";

const CourseContemporaryArt = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>Contemporary Art: Principles, Movements, & Practice</h1>
          <p>
            When someone mentions “modern art,” what comes to mind? A banana
            taped to a wall? A framed canvas that’s just blank? All of the
            above, along with a billion dollar price tag? Though contemporary
            art often gets a bad rap (“I could make that too!”) because it can
            appear arbitrary, thoughtless or unrealistic, we will explore the
            beauty and genius of works by revolutionary contemporary artists,
            including Henri Matisse, Marcel Duchamp, Stuart Davis, Wang
            Huaiqing, and many others. Through analysis of their works, we will
            also learn about the foundations of art composition and practice
            these skills through creating our own art responses to exercise
            prompts. Students should leave the workshop with a newfound
            appreciation for the bizarre, the contrived, the unrealistic and the
            exaggerated, as well as a realization that abstraction liberates us
            from the constraints of initial appearances to capture the true
            essence of a subject. I also hope to just introduce students to many
            works of art from different cultural origins.
            <br />
            This class is appropriate for anyone with an interest in the
            appreciation or creation of art, or anyone who finds contemporary
            art meaningless and would like a new perspective!
            <br />
            <b>Target Audience: </b> 9th graders and up
          </p>
          <p style={{ clear: "right" }}>
            <b>Class Date: </b> 06/15/2020 - 06/26/2020
            <br />
            <b>Format: </b> Tuesday, Thursday, Saturday
            <br />
            <b>Time (EDT): </b> 8pm - 9pm
          </p>
          <p>
            <img src={Profile} class="img-left" />
            <b>Taught by: </b>Karly Hou
            <br />
            <b>Teacher Bio: </b>Hi! I'm Karly, a rising sophomore at Harvard
            University studying Mathematics and Computer Science. I've been
            scribbling on every surface I could find since I was a toddler,
            though if you want to formalize my artistic background, I joined
            Fang Yunhua's studio at age 9 and for the next 7 years, spent 10-20
            hours/week creating and analyzing art. Like many others, I started
            my journey loving traditional landscape paintings, but gradually
            came to develop a deep fascination with the abstract, the eccentric,
            and the contemporary. Some of my other interests include AI &
            robotics, singing, poetry, sci-fi and war films, and powerlifting.
            Can't wait to share my love for art with you all!
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

export default CourseContemporaryArt;
