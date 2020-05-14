import React from 'react'
import { FooterContainer, FooterInner, Social, Icon, FooterLeft } from './styles'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IconContext } from "react-icons"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterLeft><p>
                    &#9400; Wave Learning Festival 2020</p>
                    <hr/>
                    <p>Questions? Email us at <a href = "wavelearningfestival@gmail.com">wavelearningfestival@gmail.com</a></p>
                    <p><a href = "https://docs.google.com/document/d/1bLzv7JLyi_E1HZy2Z3vDSGC7SdftH5P5L6qZb-QTeyQ/edit?usp=sharing">Terms and Conditions</a> and <a href = "https://docs.google.com/document/d/1nDSrb1KkpjV7VTEBSqgcd83HWWX_awSsaOCdJWVK-KU/edit?usp=sharing">Privacy Policy</a></p>
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
