import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
    Container, ContainerInner, HeaderImage, AboutDescription,
    Header, DescriptionText, Button, DescriptionContainer, DescriptionContainerInner,
    Card, SchoolsContainer, SchoolsContainerInner, SchoolLogo, School
} from './styles'
import Learning from './learning.svg'
import { IoMdLogIn } from "react-icons/io"
import { MdPersonalVideo, MdModeEdit, MdLanguage } from 'react-icons/md'
import { IconContext } from "react-icons"
import Berkeley from './berkeley.png'
import Brown from './brown.png'
import Harvard from './harvard.png' 
import CMU from './cmu.png'
import Umich from './umich.png'
import Upenn from './upenn.png'

const About = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <ContainerInner>
                    <AboutDescription>
                        <Header>
                            Make a Difference, right from home
                        </Header>
                        <DescriptionText>
                        Wave Learning Festival is a student-run educational platform 
                        that aims to teach students through seminars on a variety of 
                        topics. We hope to provide equitable educational resources 
                        while alleviating some of the new pressures that have fallen 
                        on working parents during the pandemic.

                        </DescriptionText>
                        <Button>
                            <IconContext.Provider value={{ color: "white", size: "1.5em", style: { verticalAlign: 'middle' } }}>
                                <div>
                                    <IoMdLogIn />
                                </div>
                            </IconContext.Provider>
                            <p>Sign up</p>
                        </Button>
                    </AboutDescription>
                    <HeaderImage src={Learning} />

                </ContainerInner>
            </Container>
            <DescriptionContainer>
                <DescriptionContainerInner>
                    <Card>
                        <IconContext.Provider value={{ color: "#2684ff", size: "3em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <MdPersonalVideo />
                            </div>
                        </IconContext.Provider>
                        <h3>Platform</h3>
                        <p>Our teachers connect with students online via remote-learning platforms 
                            like Zoom while maintaining an interactive and engaging environment</p>
                    </Card>
                    <Card>
                        <IconContext.Provider value={{ color: "#2684ff", size: "3em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <MdModeEdit />
                            </div>
                        </IconContext.Provider>
                        <h3>Types of Courses</h3>
                        <p>Our courses will range from traditionally styled lectures to teachers’ passion projects, exploring unique areas of education.</p>
                    </Card>
                    <Card>
                        <IconContext.Provider value={{ color: "#2684ff", size: "3em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <MdLanguage />
                            </div>
                        </IconContext.Provider>
                        <h3>Demographics</h3>

                        <p>Our aim is to create a global community of teachers and students in order to ensure educational equity during the COVID-19 crisis.</p>
                    </Card>
                </DescriptionContainerInner>
            </DescriptionContainer>
            <SchoolsContainer>
            <h2 style = {{textAlign: 'center', color: 'rgba(0, 0, 0, 0.8'}}>Taught by students from all over the country:</h2>

                <SchoolsContainerInner>
                    <SchoolLogo>
                        <School src={Harvard}/>
                        <School src={Berkeley}/>
                        <School src={Brown}/>
                        <School src={CMU}/>
                        <School src={Umich}/>
                        <School src={Upenn}/>
                    </SchoolLogo>
                </SchoolsContainerInner>
            </SchoolsContainer>
            <Footer/>
        </div>
    )
}

export default About