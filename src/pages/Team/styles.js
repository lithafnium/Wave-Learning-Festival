import styled from "styled-components";
import { Colors } from "@/styles";
import { device } from "@/theme";

export const TeamRow = styled.div`
  display: grid;
  width: 100%;
  backgroundcolor: "green";
  margin-top: 20px;
  @media ${device.mobileL} {
    padding: 20px 10px;
    grid-template-columns: repeat(1, [col-start] minmax(200px, 1fr) [col-end]);
  }
  @media ${device.tablet} {
    padding: 20px 10px;
    grid-template-columns: repeat(2, [col-start] minmax(200px, 1fr) [col-end]);
  }
  @media ${device.laptop} {
    padding: 20px 100px;
    grid-template-columns: repeat(4, [col-start] minmax(200px, 1fr) [col-end]);
  }
  `

export const PersonBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

export const PersonImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 5px solid black;
`