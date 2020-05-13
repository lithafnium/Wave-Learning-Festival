import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/Nav';
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
    Brand
} from './styles'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Logo from './logo.svg'
import LogoText from './logoText.png'
import LogoTextFull from './logoTextFull.svg'

const Navbar = () => {
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
                        <NavDropdown title="FAQ">
                            <NavDropdown.Item href="/faq-students">Students</NavDropdown.Item>
                            <NavDropdown.Item href="/faq-parents">Parents</NavDropdown.Item>
                            <NavDropdown.Item href="/faq-teachers">Teachers</NavDropdown.Item>
                        </NavDropdown>
                    </NavItem>
                    <NavItem>
                        <Link to='/courses'>Courses</Link>
                    </NavItem>
                    <Link>
                        <Button>
                            Login
                        </Button>
                    </Link>
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
                        <NavDropdown title="FAQ">
                            <NavDropdown.Item href="/faq-students">Students</NavDropdown.Item>
                            <NavDropdown.Item href="/faq-parents">Parents</NavDropdown.Item>
                            <NavDropdown.Item href="/faq-teachers">Teachers</NavDropdown.Item>
                        </NavDropdown>
                    </NavItem>
                    <NavItem>
                        <Link to='/courses'>Courses</Link>
                    </NavItem>
                    <Link>
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
