import React from 'react'
import { FooterContainer, FooterInner, Social, Icon } from './styles'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { IconContext } from "react-icons"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInner>
                <p>&#9400; Wave Learning Festival 2020</p>
                <Social>
                    <Icon>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <FaFacebookSquare />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                    <Icon onClick = {() => window.open('https://www.instagram.com/wavelearningfestival/', '_blank')}>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <FaInstagram />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                    <Icon onClick = {() => window.open('https://twitter.com/wavelf2020', '_blank')}>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <FaTwitter />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                    <Icon onClick = {() => window.open('https://www.linkedin.com/company/wavelf/', '_blank"')}>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <FaLinkedin />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                    <Icon onClick = {() => window.open('mailto:wavelearningfestival@gmail.com', '_blank"')}>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <AiOutlineMail />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                </Social>
            </FooterInner>
        </FooterContainer>
    )
}

export default Footer