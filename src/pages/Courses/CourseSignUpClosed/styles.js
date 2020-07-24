import styled from "styled-components";
import WavyTeachers from "./wavy_teachers.svg";
import { device } from "@/theme";
import { Colors } from "@/styles";

export const SignupBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${WavyTeachers});
  background-size: cover;
  width: 100vw;
  min-width: 320px;
  min-height: 900px;
  margin-bottom: -10px;
  margin-left: -2px;
  overflow: hidden;
  @media ${device.mobileS} {
    padding: 100px 50px;
  }
  @media ${device.mobileM} {
    padding: 100px 50px;
  }
  @media ${device.tablet} {
    padding: 100px 100px;
  }
  @media ${device.laptop} {
    padding: 100px 300px;
  }
`

export const LogoBackground = styled.img`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`



export const Button = styled.div`
  display: flex;
  background-color: ${Colors.WLF_ORANGE};
  color: white;
  padding: 12.5px 25px 12.5px 25px;
  margin-right: 20px;
  margin-top: 20px; 
  align-items: center;
  width: fit-content;
  border-radius: 10px;
  transition: 0.15s; 

  & p {
    margin: 0px;
    font-size: 1.2em;
  }

  &:hover{
    cursor: pointer;
    opacity: 0.9; 
  }
`

export const NewsLetter = styled.div`
  @media ${device.mobileS} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 60%;
  }
  display: flex;
  flex-direction: column;

  & h2 {
    color: #2684ff;
  }
`

export const Input = styled.input`
  width: 100%;
  background-color: #fff;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8492a6;
  transition: 0.2s;
  box-shadow: none;
  border: 1px solid #e0e6ed;
  border-radius: 0.5rem;
  font-family: "Muli", sans-serif;
  font-weight: "700";
  &:focus {
    outline: 0;
    border-color: rgba(38, 132, 255, 0.7);
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
`

export const Popup = styled.div`
  /* background-color: #2684ff; */
  padding: 20px;
  box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.3);
  border-radius: 15px;
  position: relative;
  margin-top: 2rem;
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: ${(props) => (props.subscribed ? '1' : '0')};

  & p {
    margin: 0px;
    color: #fff;
    font-size: 18px;
  }
`

export const Error = styled.p`
  color: ${Colors.WLF_YELLOW};
  font-size: 0.9rem;
  margin: 0px;
`