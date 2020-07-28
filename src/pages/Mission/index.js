import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";

const Mission = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>
            Mission and Values
          </Typography.Header>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Social Equity
          </Typography.Header2>
          <Typography.BodyText>
            Wave has a commitment to lessen the educational inequities caused by the COVID-19 pandemic, as well as the long-standing gaps in educational opportunity. We believe that our students should be given equitable 
            opportunities to succeed both inside and outside the classroom, focusing on 
            those with less access to external resources. Some of our initiatives include:
            <ul>
              <li>
                Using donations to help schools bridge the technology gap in classrooms and school districts
              </li>
              <li>
                Reaching out to educational organizations and institutions like public libraries
              </li>
              <li>
                Providing an online archive of courses so they will be available from anywhere at any time
              </li>
            </ul>
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Truth
          </Typography.Header2>
          <Typography.BodyText>
            Wave believes in education through objective truth, and we try to provide courses 
            free from historical and political bias. Some of our practices include:
            <ul>
              <li>
                Interviewing all teachers before approval
              </li>
              <li>
              Reviewing all course components before it is fully planned through Course Plan Documents
              </li>
              <li>
                Overseeing courses to ensure that harmful rhetoric is not perpetuated
              </li>
            </ul>
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
          Educational Opportunity
          </Typography.Header2>
          <Typography.BodyText>
            We open the doors of education to anyone interested, 
            eliminating price from the equation. Some of our initiatives include:
            <ul>
              <li>
                Providing high-quality, live, interactive courses for free
              </li>
              <li>
                Partnering with other free, educational resources and community organizations
              </li>
            </ul>
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
           “Childlike Wonder”
          </Typography.Header2>
          <Typography.BodyText>
            By providing unconventional courses —passions that often go unexplored 
            in our education system — we allow curious students to discover their own 
            love for learning. We do this by:
            <ul>
              <li>
              Allowing students to filter for types of courses that they’re passionate about on our website
              </li>
              <li>
                Reaching out to schools across the country to find both teachers and students with different perspectives
              </li>
              <li>
                Approving courses that deviate from typical high school and middle school courses
              </li>
            </ul>
          </Typography.BodyText>
          <br />
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default Mission;
