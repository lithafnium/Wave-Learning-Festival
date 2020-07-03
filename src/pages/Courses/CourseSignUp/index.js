import React, {useState, useContext} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Colors, Typography, Form } from "@/styles";
import * as Styles from "./styles";
import Logo from "./logo.png"
import firebase from 'firebase'
import { FirebaseContext } from "@/firebaseContext";

const Home = (setPage, student) => {
  return (
    <>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Course Signup
    </Typography.Header>
    <Typography.BodyText>
      Currently signed up as {student.name}.
    </Typography.BodyText>
    </>
  );
}

const Complete = () => {
  return (
    <div>
    </div>
  );
}

const Loading = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Loading...</Typography.Header>
  );
}

const Error = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Error!</Typography.Header>
  )
}

const CourseSignUp = () => {
  const [page, setPage] = useState("loading");
  const [user, setUser] = useState(null);
  const [calledOnce, setCalledOnce] = useState(false);
  const [student, setStudent] = useState(null);

  const {db} = useContext(FirebaseContext);

  if (db && !calledOnce) {
    setCalledOnce(true);
    firebase.auth().signInWithEmailAndPassword("jsr7@williams.edu", "cheesemaker123").catch(function(error) { // DELETE THIS LATER
      setPage("error");
      console.log("nuh");
    }).then(function(result) {
      if (result) {
        console.log("yuh");
        setUser(result.user);
        db.collection("students2").where("userID", "==", result.user.uid).get().then(function(snapshot) {
          var students = [];
          snapshot.forEach(function(snap) {
            students.push(snap);
          });
          if (students.length > 0) {
            setStudent(students[0].data());
            console.log(students[0].data().email);
            setPage("home");
          }
        });
      }
    });
  }

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      <Navbar />
      <Styles.SignupBackground>
        <div style={{maxWidth: 800}}>
          {page === "home" && Home(setPage, student)}
          {page === "complete" && Complete()}
          {page === "loading" && Loading()}
          {page === "error" && Error()}
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

export default CourseSignUp;
