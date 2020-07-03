import React, {useState, useContext} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Colors, Typography, Form } from "@/styles";
import * as Styles from "./styles";
import Logo from "./logo.png"
import { FirebaseContext } from "@/firebaseContext";

const Home = (setPage) => {
  return (
    <div>
    </div>
  );
}

const Complete = () => {
  return (
    <div>
    </div>
  );
}

const CourseSignUp = () => {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (

        <div style={{overflow: 'hidden', position: 'relative'}}>
          <Navbar />
          <Styles.SignupBackground>
            <div style={{maxWidth: 800}}>
              {page === "home" && Home(setPage)}
              {page === "complete" && Complete()}
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
    )
  }

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      <Navbar />
      <Styles.SignupBackground>
        <div style={{maxWidth: 800}}>
          {page === "home" && Home(setPage)}
          {page === "complete" && Complete()}
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
