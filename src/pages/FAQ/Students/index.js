import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from './styles'

const FAQStudents = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>FAQ - Students</h1>
                    <p>
                    <br/>
                    <b>Does it cost anything to take a class?</b><br/>
                    All classes are completely free—our goal is to make education as equitable as possible. However, we appreciate donations of any amount, and everything we raise will go toward a nonprofit aiding COVID-19 response.
                    </p>
                    <p>
                    <br/>
                    <b>Do I need to have any previous experience in the class topic to enroll in a class?</b><br/>
                    Not at all. Anyone can take any class they are interested in. It may be helpful to have some background in certain subjects before taking certain classes, but there is no formal requirement. 
                    </p>
                    <p>
                    <br/>
                    <b>Can I take a class even if I am not in middle school or a high school underclassman?</b><br/>
                    Yes! Although courses are aimed at students in that age range, we believe a quality education should be available to everyone who is interested. 
                    </p>
                    <p>
                    <br/>
                    <b>How many classes can I enroll in?</b><br/>
                    Feel free to register for any and all classes that interest you! However, if a class is overbooked, we may prioritize students that are not yet enrolled in others. Out of respect for our teachers who have volunteered their time, please attend all classes that you are able to be placed in.
                    </p>
                    <p>
                    <br/>
                    <b>What do I need to take a class?</b><br/>
                    Generally, classes will be held live over Zoom. We are also working to expand resources for students without stable wi-fi or live in inconvenient time zones.
                    </p>
                    <p>
                    <br/>
                    <b>Can I request a class?</b><br/>
                    Send any requests or suggestions to <a href="mailto: wavelearningfestival@gmail.com">wavelearningfestival@gmail.com</a>!
                    </p>
                </ContainerInner>
            </Container>

            <Footer/>
        </div>
    )
}

export default FAQStudents
