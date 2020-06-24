import styled from 'styled-components'
import { device } from "@/theme";

export const Container = styled.div`
    width: 100%; 
    height: 100%; 
    min-height: 100vh; 
    display: flex; 
    justify-content: center; 
`

export const ContainerInner = styled.div`
    margin-bottom: 5vh;
    display: flex; 
    align-items: center; 

    & h1{
        color: #2684ff;
    }

`

export const Icon = styled.div`
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }
`
export const Property = styled.div`
  display: flex;
`;

export const PopUp = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`

export const PopUpInner = styled.div`
    position: absolute;
    margin: auto;
    border-radius: 20px;
    background: white;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);

    @media ${device.mobileS} {
        top: 15%;
        width: 100%;
        height: 80%;
    }
    @media ${device.mobileM} {
        top: 15%;
        width: 100%;
        height: 80%;
    }
    @media ${device.laptop} {
        left: 25%;
        right: 25%;
        top: 25%;
        bottom: 25%;
        width: auto;
    }
`

export const Text = styled.div`
    background:linear-gradient(transparent 150px, white);
    margin-left: 20px;
    margin-right: 20px;
    height: 75%;
    overflow: auto;
    @media ${device.laptop} {
        padding: 5px;
    }
`

export const Heading = styled.div`
    display: flex;
    margin: 10px;
`
