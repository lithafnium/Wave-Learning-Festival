import React, { useState, useContext } from "react";
import { Colors, Typography, Form } from "@/styles";
import { Container, ContainerInner } from '@/globalStyles.js';
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Options } from "./styles";
import { FirebaseContext } from "@/firebaseContext";

import Donate_5 from "./Donate_5.png";
import Donate_10 from "./Donate_10.png";
import Donate_20 from "./Donate_20.png";
import Donate_Custom from "./Donate_Custom.png";

const Donate = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ContainerInner>
        <Typography.Header style={{ color: Colors.WLF_PURPLE }}>Donate</Typography.Header>
        <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
          As we are a fully volunteer run organization, offering free, accissible learning to all, 
          we appreciate any of the help we can get! If you have the means, please donate below. 
          Anything is highly appreciated! <br/>
        </Typography.BodyText>
        <Options>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="HULXJH7DN8Q9G" />
            <input type="image" src={Donate_5} name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          </form>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="HULXJH7DN8Q9G" />
            <input type="image" src={Donate_10} name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          </form>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="HULXJH7DN8Q9G" />
            <input type="image" src={Donate_20} name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          </form>
          
        </Options>
        <Options>
          <Typography.BodyText style={{display: "flex"}}>
            Or input a custom amount 
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="HULXJH7DN8Q9G" />
              <input type="image" src={Donate_Custom} name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" 
                style={{height: "30px", marginLeft: "10px"}}/>
            </form>
          </Typography.BodyText>
        </Options>
        <Typography.Header2 style={{color:Colors.WLF_PURPLE, fontSize: "30px", textAlign: "center"}}>
          Thank you so much!
        </Typography.Header2>
        </ContainerInner>
      </Container>
      <Footer />
    </>
  );
};

export default Donate;
