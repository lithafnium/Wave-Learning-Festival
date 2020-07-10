import React from "react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";

const StudentAgreement = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header style={{color: Colors.WLF_PURPLE}}>Student Agreement</Typography.Header>
          <Typography.BodyText>
            <b>Last Updated: July 2, 2020</b>
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>Introduction:</Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            Welcome to Wave Learning Festival! We can’t wait for you to learn from 
            our awesome educators and share your ideas with fellow students. In order 
            to keep the experience safe, respectful, and enjoyable for everyone, we 
            ask that you abide by the following guidelines.
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Be respectful to all students and educators.
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            <ol>
              <li>
                Do not use explicit language (swearing).
                <ol>
                  <li>Students will be warned once, then permanently removed from 
                  rest of the course or potentially all courses.</li>
                </ol>
              </li>
              <li>
                Do not use language that is offensive, e.g. sexist, racist language, etc.
                <ol>
                <li>Students will be warned once, then permanently removed from 
                  rest of the course or potentially all courses</li>
                </ol>
              </li>
            </ol>
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Do not be disruptive.
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            <ol>
              <li>
                Mute your microphone when you are not speaking, in order to 
                minimize background noise and other distractions.
                <ol>
                  <li>The host may mute students who have noisy mics, but if it seems 
                  that the student is being purposefully disruptive, we will remove 
                  the student from the session.</li>
                </ol>
              </li>
              <li>
                Do not send off-topic messages to the chat.
                <ol>
                  <li>Students will be warned once, then removed from the session.</li>
                </ol>
              </li>
            </ol>
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Help facilitate a kind learning environment.
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            <ol>
              <li>
                Do not say mean things to other students or educators, whether through 
                the public chat or private chat (the hosts can see all messages sent, 
                even if private!).
                <ol>
                  <li>Students will be warned once, then removed from the course.</li>
                </ol>
              </li>
              <li>
                Do not brag about how easy content might be for you; be aware that all 
                students come in with different backgrounds and skill sets and allow 
                everyone to learn at their own pace.
                <ol>
                  <li>Students will be asked to refrain from sending such messages.</li>
                  <li>Please ask the teacher in private if you think the class can move more quickly.</li>
                </ol>
              </li>
            </ol>
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Class recording policy
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            <ol>
              <li>
                Our program’s goal is to connect passionate teachers with eager students. 
                In order to further this goal, courses may be recorded and posted to the 
                official Wave Learning Festival YouTube account as unlisted videos.
                <ol>
                  <li>By taking a class with Wave, students agree to have both their audio and, 
                    if applicable, video recorded and posted as unlisted videos to YouTube.</li>
                </ol>
              </li>
            </ol>
          </Typography.BodyText>
        </ContainerInner>
      </Container>
      <Footer />
    </div>
  );
};

export default StudentAgreement;
