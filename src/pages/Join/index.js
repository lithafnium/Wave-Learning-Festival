import React, { useState, useContext } from "react";
import { Container, ContainerInner, Input, Subscribe, Error } from "./styles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FirebaseContext } from "@/firebaseContext";
import {Colors, Typography } from "@/styles";

const Join = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header style={{color: Colors.WLF_PURPLE}}>Join the Wave Learning Festival Team!</Typography.Header>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdl_OKRRZOHB4gRRSCMbHKnRmaq-n_T6upYNtC687PtmV_dRA/viewform?embedded=true"
            width="700"
            height="700"
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
