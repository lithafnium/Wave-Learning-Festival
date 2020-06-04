import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from '../../../globalStyles'
import {Colors, Typography} from '../../../styles';

const FAQStudents = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <Typography.Header style={{color: Colors.WLF_PURPLE}}>FAQ - Students</Typography.Header>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>Does it cost anything to take a class?</Typography.Header2>
                    <Typography.BodyText>All classes are completely free—our goal is to make education as equitable as possible.</Typography.BodyText>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>Do I need to have any previous experience in the class topic to enroll in a class?</Typography.Header2>
                    <Typography.BodyText>Not at all. Anyone can take any class they are interested in. It may be helpful to have some background in certain subjects before taking certain classes, but there is no formal requirement.</Typography.BodyText>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>How many classes can I enroll in?</Typography.Header2>
                    <Typography.BodyText>Feel free to register for any and all classes that interest you! However, if a class is overbooked, we may prioritize students that are not yet enrolled in others. Out of respect for our teachers who have volunteered their time, please attend all classes that you are able to be placed in.</Typography.BodyText>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>What do I need to take a class?</Typography.Header2>
                    <Typography.BodyText>Generally, classes will be held live over Zoom. We are also working to expand resources for students without stable wi-fi or live in inconvenient time zones.</Typography.BodyText>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>Can I request a class?</Typography.Header2>
                    <Typography.BodyText>Send any requests or suggestions to <a href="mailto:wavelearningfestival@gmail.com">wavelearningfestival@gmail.com!</a></Typography.BodyText>
                    <p></p>
                </ContainerInner>
            </Container>

            <Footer/>
        </div>
    )
}

export default FAQStudents
