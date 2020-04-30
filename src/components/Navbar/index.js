import React, { useState } from 'react'
import {
    NavbarContainer,
    NavbarInner,
    Brand,
    Links,
    Button,
    NavItem,
    Hamburger,
    Bar,
    SideBar
} from './styles'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

const Navbar = () => {
    const [slide, toggleSlide] = useState(false)
    return (
        <NavbarContainer>
            <NavbarInner>
                <Brand>
                    Wave Learning Festival
                </Brand>
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