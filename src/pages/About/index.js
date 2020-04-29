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
                            Title slogan slogan
                        </Header>
                        <DescriptionText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
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
                        <p>Lorem ipsum dolor sit ameasdfasdfasft, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </Card>
                    <Card>
                        <IconContext.Provider value={{ color: "#2684ff", size: "3em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <MdModeEdit />
                            </div>
                        </IconContext.Provider>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed sdafasdfasdklfjaskdfja Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </Card>
                    <Card>
                        <IconContext.Provider value={{ color: "#2684ff", size: "3em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <MdLanguage />
                            </div>
                        </IconContext.Provider>
                        <p>Lorem ipsum dolor sit amet, casdfasdfasfadfonsectetur asdfasfdadipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </Card>
                </DescriptionContainerInner>
            </DescriptionContainer>
            <SchoolsContainer>
            <h2 style = {{textAlign: 'center', color: 'rgba(0, 0, 0, 0.8'}}>Taught by students from over 25 universities:</h2>

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