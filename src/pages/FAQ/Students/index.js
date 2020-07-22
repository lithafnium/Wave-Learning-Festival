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
            FAQ - Students
          </Typography.Header>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Does it cost anything to take a class?
          </Typography.Header2>
          <Typography.BodyText>
            All classes are completely free—our goal is to make education as
            equitable as possible.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Do I need to have any previous experience in the class topic to
            enroll in a class?
          </Typography.Header2>
          <Typography.BodyText>
            Not at all. Anyone can take any class they are interested in. It may
            be helpful to have some background in certain subjects before taking
            certain classes, but there is no formal requirement.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            How many courses can I be enrolled in?
          </Typography.Header2>
          <Typography.BodyText>
            For our current Wave Four, in the registration form, you can indicate whether
	    you want to be enrolled in 1, 2, or 3 courses. You can choose up to 8 
	    different courses that you are interested in in a priority ranking order.
	    We will try our best to enroll you in the number of courses you indicate!
          </Typography.BodyText>
          <br />
	<Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Can I be waitlisted in a course?
          </Typography.Header2>
          <Typography.BodyText>
            There are multiple reasons you could be waitlisted in a course. Each 
	    instructor indicates a maximum class size. If that class is filled, you
	    can no longer be enrolled in it. In addition, some courses only allow
	    students in a certain grade range to join. If you are outside of that
	    grade range, you will unfortunately be waitlisted in that course.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            What do I need to take a class?
          </Typography.Header2>
          <Typography.BodyText>
            Generally, classes will be held live over Zoom. We are also working
            to expand resources for students without stable wi-fi or live in
            inconvenient time zones.
          </Typography.BodyText>
          <br />
	  <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            I'm outside the target grade range. Can I still register for the class?
          </Typography.Header2>
          <Typography.BodyText>
            Yes! Each course indicates a target grade range that is a good indication
	    of the difficulty of the course. Make sure to keep this in mind when
	    registering for a course outside of your grade range. There are some
	    courses that have a restricted grade range – you may not register for 
	    these courses if you are outside of the grade range.
          </Typography.BodyText>
	  <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Can I request a class?
          </Typography.Header2>
          <Typography.BodyText>
            Send any requests or suggestions to{" "}
            <a href="mailto:wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com!
            </a>
          </Typography.BodyText>
          <p></p>
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default FAQStudents;
