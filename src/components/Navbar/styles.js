import styled from "styled-components";
import { device } from "@/theme";
import { WLF_PURPLE } from "@/styles/Colors";

export const NavbarContainer = styled.header`
  font-family: "Mukta Mahee", sans-serif;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  /* justify-content: left; */
  z-index: 20;
  position: relative;

  @media ${device.mobileS} {
    /* margin-bottom: 150px; */
  }
  @media ${device.tablet} {
    margin-bottom: 0px;
  }
  @media ${device.tabletL} {
  }

`;

export const NavbarInner = styled.div`
  width: 100%;
  @media ${device.mobileS} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 80%;
  }
  @media ${device.tabletL} {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 100%;
    max-width: 1024px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BrandText = styled.img`
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    width: 20em;
    display: block;
  }
  height: auto;
  cursor: pointer;
`;

export const Brand = styled.img`
  @media ${device.mobileS} {
    display: block;
  }
  @media ${device.tablet} {
    display: none;
  }
  width: 3.5em;
  height: auto;
  cursor: pointer;
`;

export const Links = styled.div`
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }

  & a {
    color: rgba(31, 45, 61, 0.5);
    font-size: 1.2rem;
    text-decoration: none;
    transition: 0.2s;
    font-weight: 600;
  }

  & a:visited {
    color: black;
  }
`;

export const Button = styled.button`
  font-family: "Mukta Mahee", sans-serif;
  padding: 10px 25px 10px 25px;
  border-radius: 40px;
  border: none;
  background-color: ${WLF_PURPLE};
  color: #eeeeee !important;
  font-weight: 600;
  font-size: 16px;
  transition: 0.2s;
  font-size: 1.2rem;
  text-decoration: none;
  transition: 0.2s;
  border-bottom: white;

  & a {
    margin: 0px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    border-bottom: white;
  }

  &:focus {
    outline: none;
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media ${device.mobileS} {
    display: block;
  }
  @media ${device.laptop} {
    display: none;
  }

  position: fixed;
  right: 40px;
  background-color: 'white';
  width: 30px;
  height: 30px;

  transform: ${(props) => (props.slide ? "translateX(-40vw)" : null)};
`;

export const Bar = styled.p`
  border-radius: 25px;
  height: 3px;
  background-color: #50B0A0;
  margin: 6px 0;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: ${(props) => 30 - props.num * 7 + "px"};

  /* width: 30px;  */
  transform: ${(props) =>
    props.rotate1 ? "translateY(9px) rotate(-45deg)" : null};
  transform: ${(props) => (props.rotate2 ? "rotate(45deg)" : null)};
  transform: ${(props) =>
    props.rotate3 ? "translateY(-9px) rotate(45deg)" : null};
  width: ${(props) => (props.slide ? "30px" : 30 - props.num * 7 + "px")};
`;

export const SideBar = styled.div`
    position: fixed;
    top: 0;
    max-height: 100vh;
	height: 100%;
    width: calc(40%);
    right: ${props => (props.show ? '0' : 'calc(-40%)')};
    background-color: #ffffff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    padding-top: 50px;

    & a{
        color: rgba(31,45,61,.5);
        font-size: 16px;
        text-decoration: none;
        transition: 0.2s;
        font-weight: 600;
    }
    & a:hover{
        color: rgba(31,45,61,1);
    }

    & p{
        margin-bottom: 15px;
    }
`




export const NavbarDropdown = styled.div`
    position: absolute;
    left: -50px;
    width: fit-content;
    height: auto;
    background-color: #ffffff;
    box-shadow: 0 0 1.25rem rgba(31,45,61,.08);
    transition: 0.2s;
    font-weight: 600;
    white-space: nowrap
  }
  & a:hover {
    color: rgba(31, 45, 61, 1);
  }

  & p {
    /* margin-bottom: 15px; */
  }
`;

export const NavItem = styled.p`
  position: relative;
  margin: 0px;
  margin-left: 10px;
  margin-right: 10px;
  transition: 0.2s;
  width: fit-content;
  border-bottom: 2px solid white;
  text-align: center;

  &:hover {
    border-bottom: 2px solid ${WLF_PURPLE};
  }

  &:hover a {
    color: rgba(31, 45, 61, 1);
  }
`;
export const Triangle = styled.div`
  position: absolute;
  bottom: -10px;
  width: 0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ffffff;
  box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
`;

export const DropdownItem = styled.p`
  margin: 0px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  transition: 0.1s;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;

export const SidebarDropdown = styled.div`
  height: 0px;
  transition: 0.2s;
`;
