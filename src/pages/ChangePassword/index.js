import React, {useState, useContext} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Colors, Typography, Form } from "@/styles";
import * as Styles from "./styles";
import Logo from "./logo.png"
import firebase from 'firebase'
import { FirebaseContext } from "@/firebaseContext";

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

var submit = (passForm, user, setError, setPage) => {
  var newPass = passForm.new_password;
  user.updatePassword(newPass).then(function() {
    setPage("complete");
  }).catch(function(error) {
    setError(error.message);
    setPage("error");
  });
};

const Home = (db, setPage, passForm, setPassForm, user, wrongSubmission, setWrongSubmission, setError) => {
  return (
    <>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Change Password
    </Typography.Header>

    <Typography.BodyText color="white">
      Currently signed in as {user.email}.
    </Typography.BodyText>
    <br />

    <Typography.Header2 color="white" fontSize="24px">
      New Password
    </Typography.Header2>
    <Form.Input
      value={passForm.new_password}
      onChange={inputChanged("new_password", setPassForm)}
      type="password"
    />
    <Typography.Header2 color="white" fontSize="24px">
      Confirm Password
    </Typography.Header2>
    <Form.Input
      value={passForm.confirm}
      onChange={inputChanged("confirm", setPassForm)}
      type="password"
    />

    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Form.Button onClick={(event) => {
        if (passForm.new_password === passForm.confirm) {
          var credential = firebase.auth.EmailAuthProvider.credential(user.email, passForm.new_password);
          user.reauthenticateWithCredential(credential).then(function() { // login succeeded; not ok
            setWrongSubmission("New password must not be identical to your current one!");
          }).catch(function(error) { // login didn't succeed; password is different
            submit(passForm, user, setError, setPage);
          });
        } else {
          setWrongSubmission("Passwords must match!");
        }
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

const Complete = () => {
  return (
    <div>
    <Typography.Header color={Colors.WLF_YELLOW}>Your password has been changed. Click <a href="/dashboard">here</a> to go to the dashboard.</Typography.Header>
    </div>
  );
}

const Loading = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Loading...</Typography.Header>
  );
}

const Error = (errorMessage) => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Error! {errorMessage}</Typography.Header>
  )
}

const NotSignedIn = (errorMessage) => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>You are not currently signed in. Click <a href="/sign-in">here</a> to sign in.</Typography.Header>
  )
}

const ChangePassword = () => {
  const [page, setPage] = useState("loading");
  const [user, setUser] = useState(null);
  const [calledOnce, setCalledOnce] = useState(false);
  const [error, setError] = useState("");
  const [wrongSubmission, setWrongSubmission] = useState("");
  const [passForm, setPassForm] = useState({
    new_password: "",
    confirm: ""
  })

  const {db} = useContext(FirebaseContext);

  if (db && !calledOnce && !user) {
    setCalledOnce(true);
    firebase.auth().onAuthStateChanged(function(theUser) {
      if (theUser) {
        setUser(theUser);
        setPage("home");
      } else {
        setPage("not_signed_in");
      }
    });
    // setUser(firebase.auth().currentUser); // UNCOMMENT THIS OUT
    /*
    firebase.auth().signInWithEmailAndPassword("jsr7@williams.edu", "cheesemaker123").catch(function(error) {
      setPage("error");
      setError(error.message);
    }).then(function(result) {
      if (result) {
        setUser(result.user);
        if (result.user) {
          setPage("home");
        } else {
          setPage("not_signed_in");
        }
      }
    });
    */
  }

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      <Navbar />
      <Styles.SignupBackground>
        <div style={{maxWidth: 800}}>
          {page === "home" && Home(db, setPage, passForm, setPassForm, user, wrongSubmission, setWrongSubmission, setError)}
          {page === "complete" && Complete()}
          {page === "loading" && Loading()}
          {page === "error" && Error(error)}
          {page === "not_signed_in" && NotSignedIn()}
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

export default ChangePassword;
