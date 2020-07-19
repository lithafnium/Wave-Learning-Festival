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
import { WLF_PURPLE } from '@/styles/Colors'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FaUserAlt, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa'
import Logo from './logo.svg'
import LogoText from './logoText.png'
import LogoTextFull from './logo with type (1).svg'

const Navbar = () => {
  const [applyShow, setApplyShow] = useState(false)
  const [coursesShow, setCoursesShow] = useState(false)
  const [aboutShow, setAboutShow] = useState(false)
  const [faqShow, setFaqShow] = useState(false)
  const [slide, toggleSlide] = useState(false)
  return (
    <NavbarContainer>
      <NavbarInner>
        <BrandText src={LogoTextFull} />
        <Brand src={Logo} />
        <Links>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem onMouseEnter={() => setAboutShow(true)}
            onMouseLeave={() => setAboutShow(false)}>
            <Link>About Us</Link>
            {aboutShow && (<NavbarDropdown>
              <Link to="/mission">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    Mission and Values
                </DropdownItem>
              </Link>
              <Link to="/team">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Meet the Team
                </DropdownItem>
              </Link>
              <Link to="/partners-and-sponsors">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Partners and Sponsors
                </DropdownItem>
              </Link>
            </NavbarDropdown>
            )}
          </NavItem>
          <NavItem onMouseEnter={() => setCoursesShow(true)}
            onMouseLeave={() => setCoursesShow(false)}>
            <Link>Courses</Link>
            {coursesShow && (<NavbarDropdown>
              <Link to="/courses">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    New
                </DropdownItem>
              </Link>
              <Link to="/courses-inprogress">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    In Progress
                </DropdownItem>
              </Link>
              <Link to="/courses-archive">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    Past
                </DropdownItem>
              </Link>
            </NavbarDropdown>
            )}
          </NavItem>
          <NavItem onMouseEnter={() => setApplyShow(true)}
            onMouseLeave={() => setApplyShow(false)}>
            <Link>Apply</Link>
            {applyShow && (<NavbarDropdown>
              <Link to="/teachers">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    Teach
                </DropdownItem>
              </Link>
              <Link to="/join">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Join the Team
                </DropdownItem>
              </Link>
            </NavbarDropdown>
            )}
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem
            onMouseEnter={() => setFaqShow(true)}
            onMouseLeave={() => setFaqShow(false)}
          >
            <Link>FAQ</Link>
            {faqShow && (
              <>
                <NavbarDropdown>
                  <Link to="/faq-students">
                    <DropdownItem>
                      <IconContext.Provider
                        value={{
                          color: WLF_PURPLE,
                          style: {
                            verticalAlign: 'middle',
                            marginRight: '10px'
                          }
                        }}
                      >
                        <div>
                          <FaUserAlt />
                        </div>
                      </IconContext.Provider>
                      Students
                    </DropdownItem>
                  </Link>
                  <Link to="/faq-parents">
                    <DropdownItem>
                      <IconContext.Provider
                        value={{
                          color: WLF_PURPLE,
                          style: {
                            verticalAlign: 'middle',
                            marginRight: '10px'
                          }
                        }}
                      >
                        <div>
                          <FaUserFriends />
                        </div>
                      </IconContext.Provider>
                      Parents
                    </DropdownItem>
                  </Link>
                  <Link to="/faq-teachers">
                    <DropdownItem>
                      <IconContext.Provider
                        value={{
                          color: WLF_PURPLE,
                          style: {
                            verticalAlign: 'middle',
                            marginRight: '10px'
                          }
                        }}
                      >
                        <div>
                          <FaChalkboardTeacher />
                        </div>
                      </IconContext.Provider>
                      Teachers
                    </DropdownItem>
                  </Link>
                </NavbarDropdown>
              </>
            )}
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
          <div style={{ backgroundColor: 'rgb(240,240,240)', width: 40, height: 40, borderRadius: 20, marginLeft: -5, marginTop: -4, position: 'absolute', zIndex: 1 }}></div>
          <Bar num={0} rotate1={slide && true} slide={slide} style={{ position: 'relative', zIndex: 2 }}/>
          <Bar num={2} rotate2={slide && true} slide={slide} style={{ position: 'relative', zIndex: 3 }}/>
          <Bar num={1} rotate3={slide && true} slide={slide} style={{ position: 'relative', zIndex: 2 }}/>
        </Hamburger>

        <SideBar show={slide}>
          {/* <Brand
            style={{ marginLeft: "15px", marginBottom: "20px", width: "9em" }}
            src={LogoText}
          /> */}
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/team">Team</Link>
          </NavItem>
          <NavItem>
            <Link to="/teachers">Teachers</Link>
          </NavItem>
          <NavItem>
            <Link to="/courses">Courses</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/join">Join the Team</Link>
          </NavItem>
          <NavItem>
            <Link to="/faq-teachers">Teachers FAQ</Link>
          </NavItem>
          <NavItem>
            <Link to="/faq-students">Student FAQ</Link>
          </NavItem>
          <NavItem>
            <Link to="/faq-parents">Parents FAQ</Link>
          </NavItem>
        </SideBar>
      </NavbarInner>
    </NavbarContainer>
  )
}

export default Navbar
