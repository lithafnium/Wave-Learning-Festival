import React from 'react'
import { FooterContainer, FooterInner, Social, Icon, FooterLeft } from './styles'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { IconContext } from "react-icons"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterLeft><p>
                    &#9400; Wave Learning Festival 2020</p>
                    <hr/>
                    <p>Questions? Email us at <a href = "wavelearningfestival@gmail.com">wavelearningfestival@gmail.com</a> or <a href = "newsletter">sign up</a> for email updates!</p>
                    <p>
                    </p>
                    <p>
                        <a href = "terms-conditions">Terms and Conditions</a> and <a href = "privacy-policy">Privacy Policy</a>
                    </p>
                    
                </FooterLeft>
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
                </Social>
            </FooterInner>
        </FooterContainer>
    )
}

export default Footer
