import React, { useState } from 'react'
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
import Logo from './logo.png'
import LogoText from './logoText.png'
import LogoTextFull from './logoTextFull.png'

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
                        <Link to='/'>Team</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/teachers'>Teachers</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/'>Courses</Link>
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
                        <Link to='/'>Team</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/teachers'>Teachers</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/'>Courses</Link>
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