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
                <Typography.Header style={{color: Colors.WLF_PURPLE}}>FAQ - Parents</Typography.Header>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>How can I ensure the material is appropriate for my child?</Typography.Header2>
                    <Typography.BodyText>Each course’s description outlines the content that will be covered, as well as the suggested audience.</Typography.BodyText>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>How can I support Wave Learning Festival?</Typography.Header2>
                    <Typography.BodyText>Wave runs on the goodwill of students hoping to look out for other students. Feel free to share this resource with anyone you think could benefit from taking a class or might be interested in teaching a class!</Typography.BodyText>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>How will my student's privacy and safety be protected?</Typography.Header2>
                    <Typography.BodyText>
                    We will CC parents in all email communications we send to students, and teachers will never meet one-on-one with any student or directly message any student under 18 years old without explicit consent from the parent. We will not distribute student or parent emails to outside parties under any circumstance without explicit consent from the student and parent.
                    All of our teachers have been vetted.
                    </Typography.BodyText>
                    <br/>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 20}}>I have more questions.</Typography.Header2>
                    <Typography.BodyText>Please direct all inquiries to <a href="mailto: wavelearningfestival@gmail.com">wavelearningfestival@gmail.com</a>, and we will get back to you as soon as possible!</Typography.BodyText>
                    <p></p>
                </ContainerInner>
            </Container>

            <Footer/>
        </div>
    )
}

export default FAQStudents
