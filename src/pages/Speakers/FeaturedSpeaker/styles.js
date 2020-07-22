import styled from 'styled-components'
import { Colors } from '@/styles'
import { device } from '@/theme'

export const Info = styled.div`
    flex-grow: 4; 
    flex-basis: 0; 
`

export const ImageContainer = styled.div`
    flex-grow: 4; 
    flex-basis: 0; 
    display: flex; 
    justify-content: center; 
`

export const SpeakerContainer = styled.div`
    position: relative; 
    width: 100%; 
    
    padding: 2em;  
     box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15); 
    border-radius: 10px; 
    h1 {
        margin: 0px; 
        color: ${Colors.WLF_TURQOUISE};
    }
    p {
        margin-top: 0px; 
    }
`

export const SpeakerContainerInner = styled.div`
    display: flex; 
    @media ${device.mobileS} {
        flex-direction: column;
        align-items: center; 
    }
    @media ${device.tablet} {
        flex-direction: row; 
        justify-content: space-evenly;
    }
`

export const SpeakerImage = styled.img`
    width: 14em; 
    height: 14em; 
    margin-right: 15px; 
    border-radius: 50%; 
    border: 5px solid ${Colors.WLF_TURQOUISE};
    object-fit: cover; 
`

export const Description = styled.p`
    margin: 0px; 
`
export const Button = styled.button`
    border: none; 
    padding: 12px 20px 12px 20px; 
    background-color: ${Colors.WLF_TURQOUISE};
    color: white; 
    font-size: 0.9rem; 
    border-radius: 25px; 
    font-family: 'Muli', sans-serif;
    font-weight: 700; 
    transition: 0.2s;
    margin: 3px;
    &:focus{
        outline: none;
    }
    &:hover{
        cursor: pointer; 
        opacity: 0.8; 
    }
`
export const Heading = styled.h2`
    color: ${Colors.WLF_TURQOUISE};
    margin-bottom: 0.5em; 
`

export const Triangle = styled.div`
  position: absolute;
  top: -28px;
  width: 0px;
  height: 0px;
  border-left: 28px solid transparent;
  border-right: 28px solid transparent;
  border-bottom: 28px solid #ffffff;
  /* box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08); */
`
export const Content = styled.p`
    margin: 0px; 
    margin-bottom: 2em; 
`