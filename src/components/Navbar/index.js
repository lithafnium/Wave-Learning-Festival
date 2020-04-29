import React from 'react'
import { NavbarContainer, 
         NavbarInner, 
         Brand, 
         Links, 
         Button,
         NavItem } from './styles'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const Navbar = () => {
    return(
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
                        <Link to='/'>Teachers</Link>
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
            </NavbarInner>
        </NavbarContainer>
    )
}

export default Navbar