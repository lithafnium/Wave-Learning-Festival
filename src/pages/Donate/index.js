import React, { useState, useContext } from "react";
import { Colors, Typography, Form } from "@/styles";
import { Container, ContainerInner } from '@/globalStyles.js'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FirebaseContext } from "@/firebaseContext";

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
        <div style={{width: '50%', display: 'flex', 
                    flexDirection: 'row', justifyContent: 'space-between', 
                    margin: 'auto'}}>
          <Form.Button>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="HULXJH7DN8Q9G" />
            </form>
            <Typography.Header style={{color:"white", fontSize:"24px"}}>$10</Typography.Header>
          </Form.Button>
          <Form.Button>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="HULXJH7DN8Q9G" />
              
            </form>
            <Typography.Header style={{color:"white", fontSize:"24px"}}>$20</Typography.Header>
          </Form.Button>
          <Form.Button>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="HULXJH7DN8Q9G" />
            </form>
            <Typography.Header style={{color:"white", fontSize:"24px"}}>$50</Typography.Header>
          </Form.Button>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="HULXJH7DN8Q9G" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        </ContainerInner>
      </Container>
      <Footer />
    </>
  );
};

export default Donate;
