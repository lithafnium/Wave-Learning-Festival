import React from 'react'
import { FooterContainer, FooterInner, Social, Icon } from './styles'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
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
                    <Icon>
                        <IconContext.Provider value={{ color: "white", size: "2em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <FaInstagram />
                            </div>
                        </IconContext.Provider>
                    </Icon>
                </Social>
            </FooterInner>
        </FooterContainer>
    )
}

export default Footer