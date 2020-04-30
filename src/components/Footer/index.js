import React from 'react'
import { FooterContainer, FooterInner, Social, Icon } from './styles'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
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
                    <Icon onClick = {() => window.location.href = 'https://www.instagram.com/wavelearningfestival/'}>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <FaInstagram />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                    <Icon onClick = {() => window.location.href = 'https://twitter.com/wavelf2020'}>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <FaTwitter />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                    <Icon onClick = {() => window.location.href = 'https://www.linkedin.com/company/wavelf/'}>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <FaLinkedin />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                </Social>
            </FooterInner>
        </FooterContainer>
    )
}

export default Footer