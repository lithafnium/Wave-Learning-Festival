import React, {useState, useContext} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Colors, Typography, Form } from "@/styles";
import * as Styles from "./styles";
import Logo from "./logo.png"
import firebase from 'firebase'
import { FirebaseContext } from "@/firebaseContext";
import { Redirect } from 'react-router-dom'
import "./styles.css"

var inputChanged = function(key, setField) {

  var result = (event) => {
    var value = event.target.value;
    setField(prevData => {
      var result = {...prevData};
      result[key] = value;
      return result;
    });
  };
  return result;
};

var submit = (forgotForm, setWrongSubmission, setPage) => {
  firebase.auth().sendPasswordResetEmail(forgotForm.email).then(function() {
    setPage("completed");
  }).catch(function(error) {
    setPage("completed");
  });
};

const Home = (db, forgotForm, setForgotForm, wrongSubmission, setWrongSubmission, setPage) => {
  return (
    <>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Reset Password
    </Typography.Header>
    <Typography.BodyText color="white">
      Please type in your email address below and we'll send you a password reset link shortly.
    </Typography.BodyText>

    <br />

    <Typography.Header2 color="white" fontSize="24px">
      Email
    </Typography.Header2>
    <Form.Input
      value={forgotForm.password}
      onChange={inputChanged("email", setForgotForm)}
      type="email"
    />

    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Form.Button onClick={(event) => {
        submit(forgotForm, setWrongSubmission, setPage);
      }}>
        <Typography.Header color="white" fontSize="24px">
          Submit
        </Typography.Header>
      </Form.Button>
    </div>

    {wrongSubmission &&
    <Typography.BodyText color="white">
      {wrongSubmission}
    </Typography.BodyText>}

    </>
  );
}

const Loading = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Loading...</Typography.Header>
  );
}

const Completed = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>If there is an account associated with that email address, a password reset email will be sent to you shortly.</Typography.Header>
  );
}

const ForgotPassword = () => {
  const [page, setPage] = useState("loading");
  const [calledOnce, setCalledOnce] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [wrongSubmission, setWrongSubmission] = useState("");
  const [forgotForm, setForgotForm] = useState({
    email: ""
  })

  const {db} = useContext(FirebaseContext);

  if (db && !calledOnce) {
    setCalledOnce(true);
    setPage("home");
  }

  firebase.auth().onAuthStateChanged(function(theUser) {
    if (theUser) {
      setSignedIn(true);
    }
  });

  if (signedIn) {
    return (<Redirect to="/dashboard" />);
  }

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      <Navbar />
      <Styles.SignupBackground>
        <div style={{maxWidth: 800}}>
          {page === "home" && Home(db, forgotForm, setForgotForm, wrongSubmission, setWrongSubmission, setPage)}
          {page === "loading" && Loading()}
          {page === "completed" && Completed()}
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

export default ForgotPassword;
