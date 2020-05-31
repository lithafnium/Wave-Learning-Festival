import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from '../../../globalStyles'

const FAQStudents = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                <h1>FAQ - Parents</h1>
                    <p>
                    <br/>
                    <b>How can I ensure the material is appropriate for my child?</b><br/>
                    Each course’s description outlines the content that will be covered, as well as the suggested audience.
                    </p>
                    <p>
                    <br/>
                    <b>How can I support Wave Learning Festival?</b><br/>
                    Wave runs on the goodwill of students hoping to look out for other students. We appreciate donations of any amount, and everything we raise will go toward a nonprofit aiding COVID-19 response. Also, feel free to share this resource with anyone you think could benefit from taking a class or might be interested in teaching a class!
                    </p>
                    <p>
                    <br/>
                    <b>How will my student's privacy and safety be protected?</b><br/>
                    We will CC parents in all email communications we send to students, and teachers will never meet one-on-one with any student or directly message any student under 18 years old without explicit consent from the parent. We will not distribute student or parent emails to outside parties under any circumstance without explicit consent from the student and parent.
                    All of our teachers have been vetted.
                    </p>
                    <p>
                    <br/>
                    <b>I have more questions.</b><br/>
                    Please direct all inquiries to <a href="mailto: wavelearningfestival@gmail.com">wavelearningfestival@gmail.com</a>, and we will get back to you as soon as possible!
                    </p>
                </ContainerInner>
            </Container>

            <Footer/>
        </div>
    )
}

export default FAQStudents
