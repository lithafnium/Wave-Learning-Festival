import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  HeaderImage,
  AboutDescription,
  Highlight,
  HighlightStyle1,
  Button,
  MediumImage,
  MetaContainer,
  MediumContainer,
  SubHeaderContainer,
  DescItem,
  DescImage,
  Input,
  NewsLetter,
  Error,
  Popup,
} from "./styles";
import { Colors, Typography } from "../../styles";
import "./styles.css";
import Swing from "./swing_animation.gif";
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
import WavyOrange from './wavy_orange.svg';
import WavyPurple from './wavy_purple.svg';
import WavyTurquoise from './wavy_turquoise.svg';
import WavyWhite from './wavy_white.svg';
import {FirebaseContext} from '../../firebaseContext'

const About = () => {
  const [name, updateName] = useState('')
  const [email, updateEmail] = useState('')
  const [nameError, toggleName] = useState(false)
  const [emailError, toggleEmail] = useState(false)
  const [subscribed, toggleSubscribed] = useState(false)
  const {db} = useContext(FirebaseContext)

  const subscribe = () => {
      toggleEmail(false)
      toggleName(false)
      let valid = true

      if(name.length === 0){
          toggleName(true)
          valid = false
      }
      if(email.length === 0){
          toggleEmail(true)
          valid = false
      }

      if(db && valid){
          db.collection('Newsletter').add({
              name,
              email
          }).then(toggleSubscribed(true))
      }
  }

  return (
    <MetaContainer>
      <Navbar />
      <div style={{width: "100%", minHeight: "65vh"}}>
        <AboutDescription>
          <div>
            <HighlightStyle1
              src={Highlight1}
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
              <a href="/courses" class="sign-up-link">
                <Button>
                  <p>Courses</p>
                </Button>
              </a>
              <a href="/teachers" class="sign-up-link">
                <Button>
                  <p>Teachers</p>
                </Button>
              </a>
            </div>
          </div>
          <HeaderImage src={Swing} />
        </AboutDescription>
      </div>
      <div style={{width: "100%", minHeight: "65vh", backgroundImage: `url(${WavyPurple})`, backgroundSize: 'cover', paddingBottom: 100}}>
        <MediumContainer>
          <MediumImage src={Beach} />
          <div style={{gridColumn: "span 2", alignSelf: 'center'}}>
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
          </div>
        </MediumContainer>
      </div>
      <div style={{position: 'relative', width: "100%", minHeight: "65vh", backgroundImage: `url(${WavyOrange})`, backgroundSize: 'cover', marginTop: -100, paddingBottom: 100}}>
        <MediumContainer>
          <div style={{gridColumn: "span 2", alignSelf: 'center'}}>
            <Highlight
              src={Highlight3}
              style={{
                width: 160,
                height: 35,
                marginTop: 10,
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
          </div>
          <MediumImage src={FerrisWheel} />
        </MediumContainer>
      </div>
      <div style={{position: 'relative', width: "100%", minHeight: "65vh", backgroundImage: `url(${WavyWhite})`, backgroundSize: 'cover', marginTop: -100, paddingBottom: 100}}>
        <br /><br />
        <MediumContainer>
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
        </MediumContainer>
      </div>
      <div style={{position: 'relative', width: "100%", minHeight: "65vh", backgroundImage: `url(${WavyTurquoise})`, backgroundSize: 'cover', marginTop: -100}}>
        <MediumContainer>
          <MediumImage src={WhyWave} />
          <div style={{gridColumn: "span 2", alignSelf: 'center'}}>
            <Highlight
              src={Highlight4}
              style={{
                width: 205,
                height: 35,
                marginTop: 10,
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
          </div>
        </MediumContainer>
      </div>
      <div style={{backgroundColor: Colors.WLF_PURPLE}}>
        <MediumContainer>
            <Typography.Header style={{color: 'white', fontSize: 28, marginBottom: 30}}> Sign up for updates on future waves! Be the first to register for NEW courses and hear about special guests!</Typography.Header>
            {/* {subscribed && <Popup subscribed={subscribed}><p>We need your help with something: As a student-run nonprofit,
                we don't have the funds to establish a domain so we need to ensure
                that our emails aren't sent to your spambox. Please follow the
                directions sent to your email! We'd really appreciate it.</p>
                <Triangle/>
                </Popup>} */}
          <NewsLetter>
              <Input placeholder="Name"
                      value={name}
                      onChange={e => updateName(e.target.value)}
                      />
              {nameError && <Error>Please enter a name</Error>}
              <p></p>
              <Input placeholder="Email"
                      value={email}
                      onChange={e=> updateEmail(e.target.value)}/>
              {emailError && <Error>Please enter an email</Error>}
              <Button disabled={subscribed} onClick={() => subscribe()} style={{marginTop: 40}}>
                  <p>{subscribed ? 'Subscribed!' : 'Subscribe'}</p>
              </Button>
          </NewsLetter>
        </MediumContainer>
      </div>
      <Footer />
    </MetaContainer>
  );
};

export default About;
