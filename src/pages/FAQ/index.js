import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from './styles'

const FAQ = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                    <h1>FAQ - Teachers</h1>
                    <p>
                    <br/>
                    <b>When will classes start?</b><br/>
                    The first wave of classes will begin May 25th.
                    </p>
                    <p>
                    <br/>
                    <b>When will future waves be?</b><br/>
                    All subsequent waves after the initial wave on May 25th will start every two weeks.
                    </p>
                    <p>
                    <br/>
                    <b>How long will my teaching session be?</b><br/>
                    That will be up to you, as the teacher of a session. You may choose between a one-day seminar, a one-week seminar, or a two-week seminar. You can also decide how long you would like to teach per day, and how many days a week you would like to teach.
                    </p>
                    <p>
                    <br/><b>Will I be getting any support when planning my course curriculum?</b><br/>
                    Yes. You will be planning your course with the help of Wave Learning Festival’s Logistics team. Together, you will build and structure your class programming to make sure your class is successful when you teach it. Our team will also be in contact throughout the duration of your seminar, should you have any questions or request any additional support.
                    </p>
                    <p>
                    <br/><b>Do I have to know what I’m teaching before I apply?</b><br/>
                    Yes, you will apply with a topic and description for your course. However, you will not need to have your full course curriculum fleshed out before you apply. If you are having a hard time deciding between classes you’d like to teach or would like some inspiration, contact <a href="mailto: wavelearningfestival@gmail.com">wavelearningfestival@gmail.com</a> with questions.
                    </p>
                    <p>
                    <br/><b>Is it possible to co-teach with another person?</b><br/>
                    Yes! In fact, we encourage it—double the ideas and half the work is awesome for everyone involved. When filling out the Teacher Registration Form, add your co-teacher’s name and contact information. You only have to submit one form per pair.
                    </p>
                    <p>
                    <br/><b>What should I teach?</b><br/>
                    All topics are valid, whether traditional or a bit eccentric! Whatever you choose to teach, our priority is to keep classes fun and engaging—think discussions, collaborative work, and hands-on projects.
                    </p>
                    <p>
                    <br/><b>What are some examples of classes that might be taught?</b><br/>
                    The Art of Writing Poetry: a Workshop, Debate Anything, US Foreign Involvement, Is It Inevitable? Combating Climate Change, Introduction to Cryptography, Scripting for Data Analysis, Interactive Game Theory, Analyzing Contemporary Art, Discussing Faulkner’s Works, and on and on and on… (hint: Stanford Splash/MIT Splash have some pretty cool ideas!)
                    </p>
                    <p>
                    <br/><b>Do I have to assign homework? Do I have to proctor exams?</b><br/>
                    Absolutely not! As a teacher, you will have control over the amount of interactive work you would like to assign. There won’t be any official system in which to assign feedback for student work. However, if you would like to have a platform on which to give feedback, you will have the chance to coordinate with WLF’s Logistics team and come up with a solution that works with the structure of your course.</p>
                    <p>
                    <br/><b>Who can I contact with questions about Wave Learning Festival?</b><br/>
                    Send all questions to <a href="mailto: wavelearningfestival@gmail.com">wavelearningfestival@gmail.com</a>.
                    </p>
                </ContainerInner>
            </Container>

            <Footer/>
        </div>
    )
}

export default FAQ
