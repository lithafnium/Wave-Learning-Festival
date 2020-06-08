import React, { useState, useContext } from "react";
import { Container, ContainerInner, Input, Subscribe, Error } from "./styles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FirebaseContext } from "@/firebaseContext";

const Unsubscribe = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [email, updateEmail] = useState("");
  const [emailError, toggleError] = useState(false);
  const { db } = useContext(FirebaseContext);
  const [unsubscribed, toggleUnsubscribed] = useState(false);
=======
=======
>>>>>>> Added Blog
    console.log("OPENED")
    const [email, updateEmail] = useState('')
    const [emailError, toggleError] = useState(false)
    const { db } = useContext(FirebaseContext)
    const [unsubscribed, toggleUnsubscribed] = useState(false)
>>>>>>> Added Blog

  const unsubscribe = () => {
    toggleError(false);
    if (email.length === 0) {
      toggleError(true);
    } else {
      if (db) {
        db.collection("Unsubscribed")
          .add({
            email,
          })
          .then(toggleUnsubscribed(true));
      }
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>Unsubscribe</h1>
          <p>Enter email</p>
          <Input
            placeholder="email"
            onChange={(e) => updateEmail(e.target.value)}
          />
          {emailError && <Error>Please enter an email</Error>}
          <Subscribe disabled={unsubscribed} onClick={() => unsubscribe()}>
            {unsubscribed ? "Unsubscribed!" : "Unsubscribe"}
          </Subscribe>
        </ContainerInner>
      </Container>
      <Footer />
    </>
  );
};

export default Unsubscribe;
