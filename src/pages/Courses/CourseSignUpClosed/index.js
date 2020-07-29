import React, {useState, useContext} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Colors, Typography } from "@/styles";
import * as Styles from "./styles";
import Logo from "./logo.png"
import { FirebaseContext } from '@/firebaseContext'

const CourseSignUpClosed = () => {
  const [name, updateName] = useState('')
  const [email, updateEmail] = useState('')
  const [nameError, toggleName] = useState(false)
  const [emailError, toggleEmail] = useState(false)
  const [subscribed, toggleSubscribed] = useState(false)
  const { db } = useContext(FirebaseContext)

  const subscribe = () => {
    toggleEmail(false)
    toggleName(false)
    let valid = true

    if (name.length === 0) {
      toggleName(true)
      valid = false
    }
    if (email.length === 0) {
      toggleEmail(true)
      valid = false
    }

    if (db && valid) {
      db.collection('Newsletter')
        .add({
          name,
          email
        })
        .then(toggleSubscribed(true))
    }
  }

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      <Navbar />
      <Styles.SignupBackground>
        <div style={{maxWidth: 650}}>
          <>
          <Typography.Header color={Colors.WLF_YELLOW} fontSize="36px">
            Wave 5 course registration opens soon!
          </Typography.Header>

          <Typography.BodyText color="white" fontSize="21px">
            Sign up here to receive email alerts and be the first to register for Wave 5! Registration for Wave 5 will open on August 1.
            {subscribed && <Styles.Popup subscribed={subscribed}><p>Thank you for subscribing! Please follow the directions sent to your email to ensure you receive our updates. </p>
            </Styles.Popup>}
          </Typography.BodyText>
          <br/><br/>

          <Styles.NewsLetter>
            <Styles.Input
              placeholder="Name"
              value={name}
              onChange={(e) => updateName(e.target.value)}
            />
            {nameError && <Styles.Error>Please enter a name</Styles.Error>}
            <p></p>
            <Styles.Input
              type = "email"
              placeholder="Email"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            />
            {emailError && <Styles.Error>Please enter an email</Styles.Error>}
            <Styles.Button
              disabled={subscribed}
              onClick={() => subscribe()}
              style={{ marginTop: 40 }}
            >
              <p>{subscribed ? 'Subscribed!' : 'Subscribe'}</p>
            </Styles.Button>
          </Styles.NewsLetter>

          </>
        </div>
      </Styles.SignupBackground>
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

export default CourseSignUpClosed;
