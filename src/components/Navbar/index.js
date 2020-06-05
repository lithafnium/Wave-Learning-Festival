import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
    NavbarContainer,
    NavbarInner,
    BrandText,
    Links,
    Button,
    NavItem,
    Hamburger,
    Bar,
    SideBar,
    Brand,
    NavbarDropdown,
    DropdownItem
} from './styles'
import { WLF_PURPLE } from './../../styles/Colors'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { IconContext } from "react-icons"
import { FaUserAlt, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa'
import Logo from './logo.svg'
import LogoText from './logoText.png'
import LogoTextFull from './logoTextFull.svg'

const Navbar = () => {
    const [show, setShown] = useState(false)
    const [slide, toggleSlide] = useState(false)
    return (
        <NavbarContainer>
            <NavbarInner>
                <BrandText src={LogoTextFull}/>
                <Brand src={Logo}/>
                <Links>
                    <NavItem>
                        <Link to='/'>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/team'>Team</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/teachers'>Teachers</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/courses'>Courses</Link>
                    </NavItem>
                    <NavItem onMouseEnter={() => setShown(true)}
                              onMouseLeave={() => setShown(false)} >
                        <Link>
                            FAQ
                        </Link>
                       {show &&
                            <>
                            <NavbarDropdown>
                                <Link to='/faq-students'>
                                    <DropdownItem>
                                        <IconContext.Provider value={{ color: WLF_PURPLE, style: { verticalAlign: 'middle', marginRight: '10px' } }}>
                                            <div>
                                        <FaUserAlt/>
                                        </div>
                                    </IconContext.Provider>
                                        Students
                                    </DropdownItem>
                                </Link>
                                <Link to='/faq-parents'>
                                    <DropdownItem>
                                    <IconContext.Provider value={{ color: WLF_PURPLE, style: { verticalAlign: 'middle', marginRight: '10px' } }}>
                                            <div>
                                            <FaUserFriends/>
                                        </div>
                                    </IconContext.Provider>
                                        Parents
                                    </DropdownItem>
                                </Link>
                                <Link to='/faq-teachers'>
                                    <DropdownItem>
                                    <IconContext.Provider value={{ color: WLF_PURPLE, style: { verticalAlign: 'middle', marginRight: '10px' } }}>
                                            <div>
                                            <FaChalkboardTeacher/>
                                        </div>
                                    </IconContext.Provider>
                                        Teachers
                                    </DropdownItem>
                                </Link>

                            </NavbarDropdown>
                            </>
                        }
                    </NavItem>
{/*
                    <Link to='/login'>
                        <Button>
                            Login
                        </Button>
                    </Link>
                    */}
                </Links>
                <Hamburger slide={slide} onClick={() => toggleSlide(!slide)}>
                    <Bar num={0} rotate1={slide && true} slide={slide}/>
                    <Bar num={2} rotate2={slide && true} slide={slide}/>
                    <Bar num={1} rotate3={slide && true} slide={slide}/>
                </Hamburger>
                <SideBar show={slide}>
                    <Brand style = {{marginLeft: '15px', marginBottom: '20px', width: '9em'}}src={LogoText}/>
                    <NavItem>
                        <Link to='/'>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/team'>Team</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/teachers'>Teachers</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/courses'>Courses</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/faq-teachers'>
                            Teachers FAQ
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/faq-students'>
                            Student FAQ
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/faq-parents'>
                            Parents FAQ
                        </Link>
                    </NavItem>

                    <Link to='/login'>
                        <Button>
                            Login
                        </Button>
                    </Link>
                </SideBar>
            </NavbarInner>
        </NavbarContainer>
    )
}

export default Navbar
