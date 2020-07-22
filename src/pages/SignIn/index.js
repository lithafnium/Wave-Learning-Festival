import React, {useState, useContext} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Colors, Typography, Form } from "@/styles";
import * as Styles from "./styles";
import Logo from "./logo.png"
import firebase from 'firebase'
import { FirebaseContext } from "@/firebaseContext";
import { Redirect } from 'react-router-dom'

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

var submit = (signInForm, setWrongSubmission) => {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function() {
    firebase.auth().signInWithEmailAndPassword(signInForm.username, signInForm.password).then(function(result) {
      if (result) {
        window.location.href = "/dashboard";
      }
    }).catch(function(error) {
      setWrongSubmission("Wrong email/password!");
    });
  });
};

const Home = (db, signInForm, setSignInForm, wrongSubmission, setWrongSubmission) => {
  return (
    <>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Sign In
    </Typography.Header>

    <br />

    <Typography.Header2 color="white" fontSize="24px">
      Email
    </Typography.Header2>
    <Form.Input
      value={signInForm.username}
      onChange={inputChanged("username", setSignInForm)}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Password
    </Typography.Header2>
    <Form.Input
      value={signInForm.password}
      onChange={inputChanged("password", setSignInForm)}
      type="password"
    />

    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Form.Button onClick={(event) => {
        submit(signInForm, setWrongSubmission);
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

const SignIn = () => {
  const [page, setPage] = useState("loading");
  const [calledOnce, setCalledOnce] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [wrongSubmission, setWrongSubmission] = useState("");
  const [signInForm, setSignInForm] = useState({
    username: "",
    password: ""
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
          {page === "home" && Home(db, signInForm, setSignInForm, wrongSubmission, setWrongSubmission)}
          {page === "loading" && Loading()}
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

export default SignIn;
