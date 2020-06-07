import React, { useState, useContext } from "react";
import { Container, ContainerInner, Input, Subscribe, Error } from "./styles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FirebaseContext } from "@/firebaseContext";

const Join = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ContainerInner>
          <h1>Join the Wave Learning Festival Team!</h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdvwghN60MNhtoJMTuR5lb-l-eh3JZNYacKJX_lPBppItp8Xw/viewform?embedded=true"
            width="700"
            height="520"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </ContainerInner>
      </Container>
      <Footer />
    </>
  );
};

export default Join;
