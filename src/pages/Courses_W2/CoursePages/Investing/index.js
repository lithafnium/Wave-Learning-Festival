import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles.css";
import { Container, ContainerInner } from "@/globalStyles";

import Profile from "../../teacherheadshots/Max Bricken.jpg";
import ProfileTwo from "../../teacherheadshots/James Bowden.jpg";

const CourseInvesting = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>Fundamentals Of Investing</h1>
          <p>
            This course will discuss basic terminology and strategies involved
            in investing and the stock market. We will give three one hour
            sessions with each lecture building on the last. The first day we
            will go over compound interest, the stock market, asset classes, and
            trading platforms. On the second day we will discuss the actual
            trading of stocks, including buying, selling, orders, earnings,
            portfolio diversification, sectors, and dividends. The third day
            will start to delve into more advanced topics with options trading,
            including calls, puts, and spreads and provide insight into the
            basics of analysis with indicators such as MACD, candlesticks, and
            moving averages. No prior knowledge is required; we will start from
            the basics and bring you up to speed in a short amount of time.
            <br />
            <br />
            There will be time for discussion and Q&A after each lecture and
            will do our best to get all the content across in a digestible way.
            Although this course by no means provides a comprehensive knowledge
            of investing we hope it will give you a good baseline in stock
            market literacy and may spark interest in some of you to pursue the
            field further.
            <br />
            <br />
            Both of us are happy to discuss anything about the course or more
            advanced topics further so feel free to shoot us an email.
            <br />
            <b>Target Audience: </b>8th - 12th Graders
          </p>
          <p style={{ clear: "right" }}>
            <b>Class Date: </b> 06/15/2020 - 06/19/2020
            <br />
            <b>Format: </b> Monday, Wednesday, Friday
            <br />
            <b>Time (EDT): </b> 3pm - 4pm
          </p>
          <div class="bios">
            <div class="bio">
              <p>
                <img src={Profile} class="img-left" />
                <b>Taught by: </b>Max Bricken
                <br />
                <b>Teacher Bio: </b>
                Hi my name is Max Bricken and I am a rising sophomore at Caltech
                studying Information and Data Sciences and Business, Economics,
                and Management. I am involved with the collegiate water polo
                team and am a board member of the student investment fund on
                campus. I am teaching this course to try to give you insight
                into the importance of finance and the benefits of smart
                investing.
                <br />
                <br />
              </p>
            </div>
            <div class="bio">
              <p>
                <img src={ProfileTwo} class="img-left" />
                <b>Taught by: </b>James Bowden
                <br />
                <b>Teacher Bio: </b>
                Hi, my name is James Bowden and I’m a rising sophomore at
                Caltech studying computer science and biology. I’m a board
                member of the student investment fund and didn’t start
                personally investing until recently. I didn’t learn a lot of
                these important concepts until after I started investing, which
                is why I’m excited to teach this course and prepare students to
                allocate their funds wisely. I also do bioinformatics research
                in a synthetic biology lab, machine learning research with a CS
                group, and play for the water polo team.
              </p>
            </div>
          </div>
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

export default CourseInvesting;
