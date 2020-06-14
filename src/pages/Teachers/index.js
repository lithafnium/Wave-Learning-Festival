import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as Styles from "./styles";
import TeacherPic from "./teacher.jpg";
import { Colors, Typography } from "@/styles";
import Logo from "./logo.png"

const Teachers = () => {
  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      <Navbar />
      <Styles.TeacherBackground>
        <div style={{maxWidth: 800}}>
        <Typography.Header color={Colors.WLF_YELLOW}>
          Teachers
        </Typography.Header>
        <Typography.BodyText color="white" fontSize="20px" style={{marginBottom: 30}}>
          Want to share your passions with students worldwide? Apply to be a teacher for Wave Learning Festival!
        </Typography.BodyText>
        <Typography.BodyText color="white" fontSize="20px">
          Wave Learning Festival is an educational platform organized by students at Harvard, Stanford, Northwestern,
           UPenn, Williams, RISD, and SLO in which college students teach free seminars on a variety of topics to middle and high schoolers online.
        </Typography.BodyText>
        <Styles.TestimonialBackground>
          <Styles.TestimonialItem>
            <Styles.TeacherImage src={TeacherPic} />
          </Styles.TestimonialItem>
          <Styles.TestimonialItem style={{alignItems: 'flex-start'}}>
            <Typography.Header color={Colors.WLF_YELLOW} fontSize="28px">
              "I loved teaching and working with all these excited learners!"
            </Typography.Header>
            <Typography.Header color={Colors.WLF_YELLOW} fontSize="28px">
              -Cecilia, wave 1 teacher
            </Typography.Header>
          </Styles.TestimonialItem>
        </Styles.TestimonialBackground>
        <Typography.BodyText color="white" fontSize="20px" style={{marginBottom: 30}}>
          The global pandemic has changed what education and summer
          programs look like, and in some cases, completely shut them down.
          By providing fun and diverse live classes, we hope to help students
          continue learning, stay engaged, and interact with others while stuck
          at home. We also hope to alleviate some of the new burderns that have
          fallen on parents who no longer have summer programs to keep their
          children busy while they work full-time.
        </Typography.BodyText>
        <Typography.BodyText color="white" fontSize="20px">
          Wave is an opportunity to gain valuable teaching and leadership
          experience while sharing your passions with  wide audience. The
          flexibility of the time commitment allows you to volunteer while also
          pursuing other summer experiences. No prior teaching experience is
          required, and you will receive help in making your class come to life!
        </Typography.BodyText>
        <Styles.ApplyButton>
          <Typography.Header color="white" fontSize="24px">
            Apply Now!
          </Typography.Header>
        </Styles.ApplyButton>
        </div>
      </Styles.TeacherBackground>
      <Styles.LogoBackground src={Logo} alt="logo" style={{
        position: 'absolute',
        width: 300,
        height: 300,
        transform: 'rotate(-35deg)',
        top: '60%',
        left: -100,
      }}/>
      <Styles.LogoBackground src={Logo} alt="logo" style={{
        position: 'absolute',
        width: 300,
        height: 300,
        transform: 'rotate(-235deg)',
        top: '20%',
        right: -150,
      }}/>
      <Footer />
    </div>
  );
};

export default Teachers;
