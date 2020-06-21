import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";

const FAQStudents = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>
            FAQ - Teachers
          </Typography.Header>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            When will classes start?
          </Typography.Header2>
          <Typography.BodyText>
            Here is the current class schedule for waves 1-5: <br /><br />
            Wave One: 5/25 - 6/5 <br />
            Wave Two: 6/15 - 6/26 <br />
            Wave Three: 7/6 - 7/24 <br />
            Wave Four: 7/27 - 8/14 <br />
            Wave Five: 8/17 - 8/28 <br />
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            When will future waves be?
          </Typography.Header2>
          <Typography.BodyText>
            All subsequent waves after the initial wave on May 25th will start
            every two weeks.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            How long will my teaching session be?
          </Typography.Header2>
          <Typography.BodyText>
            That will be up to you, as the teacher of a session. You may choose
            between a one-day seminar, a one-week seminar, or a two-week
            seminar. You can also decide how long you would like to teach per
            day, and how many days a week you would like to teach.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Will I be getting any support when planning my course curriculum?
          </Typography.Header2>
          <Typography.BodyText>
            Yes. You will be planning your course with the help of Wave Learning
            Festival’s Logistics team. Together, you will build and structure
            your class programming to make sure your class is successful when
            you teach it. Our team will also be in contact throughout the
            duration of your seminar, should you have any questions or request
            any additional support.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Do I have to know what I’m teaching before I apply?
          </Typography.Header2>
          <Typography.BodyText>
            Yes, you will apply with a topic and description for your course.
            However, you will not need to have your full course curriculum
            fleshed out before you apply. If you are having a hard time deciding
            between classes you’d like to teach or would like some inspiration,
            contact{" "}
            <a href="mailto: wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com
            </a>{" "}
            with questions.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Is it possible to co-teach with another person?
          </Typography.Header2>
          <br />
          <Typography.BodyText>
            Yes! In fact, we encourage it—double the ideas and half the work is
            awesome for everyone involved. When filling out the Teacher
            Registration Form, add your co-teacher’s name and contact
            information. You only have to submit one form per pair.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            What should I teach?
          </Typography.Header2>
          <br />
          <Typography.BodyText>
            All topics are valid, whether traditional or a bit eccentric!
            Whatever you choose to teach, our priority is to keep classes fun
            and engaging—think discussions, collaborative work, and hands-on
            projects.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            What are some examples of classes that might be taught?
          </Typography.Header2>
          <Typography.BodyText>
            The Art of Writing Poetry: a Workshop, Debate Anything, US Foreign
            Involvement, Is It Inevitable? Combating Climate Change,
            Introduction to Cryptography, Scripting for Data Analysis,
            Interactive Game Theory, Analyzing Contemporary Art, Discussing
            Faulkner’s Works, and on and on and on… (hint: Stanford Splash/MIT
            Splash have some pretty cool ideas!)
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Do I have to assign homework? Do I have to proctor exams?
          </Typography.Header2>
          <Typography.BodyText>
            Absolutely not! As a teacher, you will have control over the amount
            of interactive work you would like to assign. There won’t be any
            official system in which to assign feedback for student work.
            However, if you would like to have a platform on which to give
            feedback, you will have the chance to coordinate with WLF’s
            Logistics team and come up with a solution that works with the
            structure of your course.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Who can I contact with questions about Wave Learning Festival?
          </Typography.Header2>
          <Typography.BodyText>
            Send all questions to{" "}
            <a href="mailto: wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com
            </a>
            .
          </Typography.BodyText>
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default FAQStudents;
