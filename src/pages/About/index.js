import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Container,
  ContainerInner,
  HeaderImage,
  AboutDescription,
  Highlight,
  Header,
  DescriptionText,
  Button,
  DescriptionContainer,
  DescriptionContainerInner,
  MediumImage,
  MediumDescription,
  Card,
  SchoolsContainer,
  SchoolsContainerInner,
  SchoolLogo,
  School,
  SubHeaderContainer,
  WhoWeAre,
  WhoHeader,
  WhoContanier,
  DescRow,
  DescItem,
  DescImage,
  Background,
} from "./styles";
import { Colors, Typography } from "../../styles";
import "./styles.css";
import Learning from "./learning.svg";
import Swing from "./swing_animation.gif";
import { IoMdLogIn } from "react-icons/io";
import { MdPersonalVideo, MdModeEdit, MdLanguage } from "react-icons/md";
import { IconContext } from "react-icons";
import Berkeley from "./berkeley.png";
import Brown from "./brown.png";
import Harvard from "./harvard.png";
import CMU from "./cmu.png";
import Umich from "./umich.png";
import Upenn from "./upenn.png";
import Highlight1 from "./highlight_1.svg";
import Highlight2 from "./highlight_2.svg";
import Highlight3 from "./highlight_3.svg";
import Highlight4 from "./highlight_4.svg";
import Beach from "./beach.svg";
import FerrisWheel from "./ferriswheel.svg";
import Icon1 from './icon_1.svg';
import Icon2 from './icon_2.svg';
import Icon3 from './icon_3.svg';
import WhyWave from './whywave.svg';
import Wave1 from './wave1.svg';
import Wave2 from './wave2.svg';

const About = () => {
  return (
    <div>
      <Navbar />
      <Container style={{marginBottom: 100}}>
        <ContainerInner>
          <AboutDescription>
            <Highlight
              src={Highlight1}
              style={{
                width: 140,
                height: 200,
                top: -53,
                left: 125,
              }}
            />
            <Typography.Header style={{ position: "relative", zIndex: 2 }}>
              Make Waves With Us!
            </Typography.Header>
            <SubHeaderContainer>
              <Typography.BodyText>
                Join the Wave Learning Festival for a summer of
                not-at-all-ordinary programming, hosted by student leaders
                across the nation.
              </Typography.BodyText>
            </SubHeaderContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "50px",
              }}
            >
              <a href="/students" class="sign-up-link">
                <Button>
                  <p>Students</p>
                </Button>
              </a>
              <a href="/teachers" class="sign-up-link">
                <Button>
                  <p>Teachers</p>
                </Button>
              </a>
            </div>
          </AboutDescription>
          <HeaderImage src={Swing} />
        </ContainerInner>
      </Container>
      <Container style={{ backgroundColor: Colors.WLF_PURPLE, marginTop: 40}}>
        <ContainerInner>
          <MediumImage src={Beach} />
          <MediumDescription>
            <Highlight
              src={Highlight2}
              style={{
                width: 160,
                height: 60,
              }}
            />
            <Typography.Header
              style={{
                position: "relative",
                zIndex: 2,
                color: "white",
                fontSize: 28,
                marginBottom: 30,
              }}
            >
              Our Mission: Smash Summer Boredom
            </Typography.Header>
            <Typography.BodyText
              style={{ color: "white", fontSize: 18, fontWeight: "100" }}
            >
              We believe that summer should be a time for creativity, exploration, and academic excitement outside the classroom.
              So while traditional summer programs are on halt, Wave Learning Festival is bringing all the magic and engagement 
              of a summer camp right to your home. We hope to provide students resources that help make this time as productive
              and engaging as possible.
            </Typography.BodyText>
          </MediumDescription>
        </ContainerInner>
      </Container>
      <Container style={{ backgroundColor: Colors.WLF_ORANGE }}>
        <ContainerInner>
          <MediumDescription>
            <Highlight
              src={Highlight3}
              style={{
                width: 100,
                height: 60,
                left: 25,
              }}
            />
            <Typography.Header
              style={{
                position: "relative",
                zIndex: 2,
                color: "white",
                fontSize: 28,
                marginBottom: 30,
              }}
            >
              A Festival Unlike Any Other
            </Typography.Header>
            <Typography.BodyText
              style={{ color: "white", fontSize: 18, fontWeight: "100" }}
            >
              During the Wave Learning Festival, tune into seminars designed for
              middle schoolers and high schoolers covering every topic
              imaginable, especially those not found in a classroom. Learn how
              to code your own games, cook up some French Cuisine, or pick up
              some digital painting skills. The possibilities are endless!
            </Typography.BodyText>
          </MediumDescription>
          <MediumImage src={FerrisWheel} />
        </ContainerInner>
      </Container>
      <Container>
        <ContainerInner>
          <DescRow>
            <DescItem>
              <DescImage src={Icon1}/>
              <Typography.Header style={{fontSize: 20, color: Colors.WLF_BLACK}}>
                Never the Same
              </Typography.Header>
              <Typography.BodyText style={{fontSize: 16, color: Colors.WLF_BLACK}}>
                Choose from over 25 different seminars covering everything from STEM to performing arts. 
                Love trying new things? New waves of classes and seminar leaders get released every 2 weeks.
              </Typography.BodyText>
            </DescItem>
            <DescItem>
            <DescImage src={Icon2}/>
              <Typography.Header style={{fontSize: 20, color: Colors.WLF_BLACK}}>
                Exclusive Seminar Leaders
              </Typography.Header>
              <Typography.BodyText style={{fontSize: 16, color: Colors.WLF_BLACK}}>
                Seminars are hosted by talented college students across campuses such as Harvard, Stanford, MIT, and so many more. 
                Our seminar leaders love teaching and want to introduce you to their favorite passion projects and subjects!
              </Typography.BodyText>
            </DescItem>
            <DescItem>
              <DescImage src={Icon3}/>
              <Typography.Header style={{fontSize: 20, color: Colors.WLF_BLACK}}>
                Have a Great Summer
              </Typography.Header>
              <Typography.BodyText style={{fontSize: 16, color: Colors.WLF_BLACK}}>
                Stay connected with peers who share your intellectual interests, and participate in an open, welcoming environment
                -- all while doing this remotely and free of charge.
              </Typography.BodyText>
            </DescItem>
          </DescRow>
        </ContainerInner>
      </Container>
      <Container style={{ backgroundColor: Colors.WLF_TURQOUISE, marginTop: 40 }}>
        <ContainerInner>
          <MediumImage src={WhyWave} />
          <MediumDescription>
            <Highlight
              src={Highlight4}
              style={{
                width: 90,
                height: 60,
                left: 60,
              }}
            />
            <Typography.Header
              style={{
                position: "relative",
                zIndex: 2,
                color: "white",
                fontSize: 28,
                marginBottom: 30,
              }}
            >
              Why Wave?
            </Typography.Header>
            <Typography.BodyText
              style={{ color: "white", fontSize: 18, fontWeight: "100" }}
            >
              The global COVID-19 pandemic has disrupted education worldwide, and in many cases, resulted in the loss of many
              critical learning opportunities. We hope that providing these fun and diverse classes can help students stay engaged
              and interact with fellow students when they're stuck at home. For a few hours every day, students can take a break with
              a project they love.
            </Typography.BodyText>
          </MediumDescription>
        </ContainerInner>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
