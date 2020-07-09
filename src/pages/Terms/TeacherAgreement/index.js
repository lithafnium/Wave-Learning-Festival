import React from "react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";

const TermsConditions = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
        <Typography.Header style={{color: Colors.WLF_PURPLE}}>Teacher Agreement</Typography.Header>
          <Typography.BodyText>By teaching at Wave, you agree to the following:</Typography.BodyText>
          <ol>
            <li>
              I will be present at all the sessions I have agreed to teach. If
              an emergency arises that makes me unable to teach a session, I
              will notify WLF at{" "}
              <a href="wavelf.logistics@gmail.com">
                wavelf.logistics@gmail.com
              </a>{" "}
              at least an hour in advance, as well as my students and their
              parents (email lists will be provided).
            </li>
            <li>
              I will CC parents in any email communications I may send to
              students, and I will not meet one-on-one with any student or
              directly message any student under 18 years old without explicit
              consent from the parent.
            </li>
            <li>
              I will not distribute student or parent emails to outside parties
              under any circumstance without explicit consent from the student
              and parent.
            </li>
            <li>
              I will remain conscious of my student audience in designing my
              curriculum. I will use respectful and age-appropriate language
              during all sessions.
            </li>
            <li>
              I will not teach, present, or distribute any material that is
              harmful, abusive, defamatory, discriminatory, or restricts or
              inhibits anyone’s use or enjoyment of Wave Learning. In addition,
              I will treat all students with respect regardless of student
              background.
            </li>
          </ol>
        </ContainerInner>
      </Container>
      <Footer />
    </div>
  );
};

export default TermsConditions;
