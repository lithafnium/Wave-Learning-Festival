import styled from "styled-components";
import WavyTeachers from "./wavy_teachers.svg";
import {Colors} from "@/styles";
import { device } from "@/theme";

export const TeacherBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${WavyTeachers});
  background-size: cover;
  width: 100vw;
  min-width: 320px;
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

export const TestimonialBackground = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 50px 0px;
`

export const TestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TeacherImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  border: 5px solid ${Colors.WLF_YELLOW};
`

export const ApplyButton = styled.div`
  background-color: ${Colors.WLF_YELLOW};
  border-radius: 15px;
  width: 170px;
  padding: 4px 20px;
  cursor: pointer;
  margin-top: 40px;
  margin-left: 4px;
  transition: all 0.1s ease;
  &:hover {
    background-color: ${Colors.WLF_ORANGE};
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