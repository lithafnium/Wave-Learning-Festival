import styled from 'styled-components'
import { device } from '../../theme'
export const Container = styled.div`
    width: 100%; 
    height: 65vh;
    min-height: 65vh; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    @media ${device.mobileS} {
        margin-top: 120px ;
    }

    @media ${device.mobileM} {
        margin-top: 120px; 
    }

    @media ${device.mobileL} {
        margin-top: 60px; 

    }


    @media ${device.tablet} {
        margin-top: 0px;

    }
    
`

export const ContainerInner = styled.div`
    display: flex; 
    width: 100%; 

    @media ${device.mobileS} {
        margin-top: 150px;
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
    }

    @media ${device.tablet} {
        margin-top: 20em;
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
    }
    @media ${device.tabletL} {
        margin-top: 0; 
        max-width: 768px;
        flex-direction: row !important;
        justify-content: space-between;
    }

    @media ${device.laptop} {
        max-width: 1024px;
        flex-direction: row !important; 
        justify-content: space-between;
    }
`

export const HeaderImage = styled.img`
    @media ${device.mobileS} {
        width: 60%; 
        margin-top: 4em; 
    }
    @media ${device.tablet} {
        width: 45%; 
        margin-top: 4em; 
    }
    @media ${device.tabletL} {
        width: 45%; 
        margin-top: 0;  
    }

    @media ${device.laptop} {
        width: 45%; 
        margin-top: 0;  
    }
     
    height: auto; 
`

export const AboutDescription = styled.div` 

    @media ${device.mobileS} {
        width: 80%;
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    }
    @media ${device.tablet} {
        width: 70%; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    }
    @media ${device.tabletL} {
        width: 45%; 
        display: block; 
    }

    @media ${device.laptop} {
        width: 45%; 
    }
`
export const Header = styled.h1`
    color: #2684ff;
    font-size: 48px; 
`

export const DescriptionText = styled.p`
    font-size: 20px; 
    color: rgba(0, 0, 0, 0.7); 
`

export const Button = styled.div`
    display: flex; 
    background-color: #2684ff;
    color: white; 
    padding: 15px 30px 15px 30px;
    align-items: center; 
    width: fit-content; 
    border-radius: 50px; 

    & p{
        margin: 0px; 
        margin-left: 10px;
        font-size: 1.2em; 
    }
`

export const DescriptionContainer = styled.div`
    margin-top: 2vh; 
    width: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
`

export const DescriptionContainerInner = styled.div`
    display: flex; 
    width: 100%; 
    margin: auto; 

    @media ${device.mobileS} {
        flex-direction: column; 
        align-items: center; 
    }

    @media ${device.tablet} {
        flex-direction: column; 
        align-items: center; 
    }
    @media ${device.tabletL} {
        margin-top: 0; 
        max-width: 768px;
        flex-direction: row !important;
        justify-content: space-evenly;    
    }

    @media ${device.laptop} {
        max-width: 1024px;
        flex-direction: row !important; 
        justify-content: space-evenly;
    }
`

export const Card = styled.div`
   
    margin-top: 5em; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: space-evenly;

    @media ${device.mobileS} {
        width: 60%; 
    }

    @media ${device.tablet} {
        width: 25%; 
    }

    & p{
        text-align: center;
    }
`

export const SchoolsContainer = styled.div`
    margin-top: 8vh; 
    width: 100%; 
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    margin-bottom: 8vh; 
`

export const SchoolsContainerInner = styled.div`
    display: flex; 
    width: 100%; 
    margin: auto; 

    @media ${device.mobileS} {
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
    }

    @media ${device.tablet} {
        
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
    }
    @media ${device.tabletL} {
        margin-top: 0; 
        max-width: 768px;
        flex-direction: row !important;
        justify-content: space-evenly;    
    }

    @media ${device.laptop} {
        max-width: 1024px;
        flex-direction: row !important; 
        justify-content: space-evenly;
    }
`

export const SchoolLogo = styled.div`
    display: flex; 
    justify-content: space-evenly;
    width: 100%; 
    flex-wrap: wrap; 
`

export const School = styled.img`
    width: 5em;
    height: 5em; 
    margin: 20px; 
    
`

export const WhoContanier = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 100%; 
    justify-content: center; 
    align-items: center; 
    padding-top: 7em; 
    padding-bottom: 7em; 
    flex-wrap: wrap; 
    @media ${device.mobileS} {
        margin-top: 500px ;
    }

    @media ${device.mobileM} {
        margin-top: 500px ;
    }

    @media ${device.mobileL} {
        margin-top: 500px ;

    }


    @media ${device.tablet} {
        margin-top: 500px ;

    }

    @media ${device.tabletL} {
        margin-top: 80px; 
    }

`

export const WhoWeAre = styled.div`
    display: flex; 
    width: 100%; 
    margin: auto; 
    margin-bottom: 30px; 
    
    @media ${device.mobileS} {
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
    }

    @media ${device.tablet} {
        
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
    }
    @media ${device.tabletL} {
        margin-top: 0; 
        max-width: 768px;
        flex-direction: row !important;
        justify-content: space-evenly;   
        align-items: flex-start;  
    }

    @media ${device.laptop} {
        max-width: 1024px;
        flex-direction: row !important; 
        justify-content: space-evenly;
    }
`

export const WhoHeader = styled.div`
    @media ${device.mobileS} {
        width: 80%;
    }
    @media ${device.tablet} {
        
        width: 50%;
    }
    display: flex; 
    flex-direction: column;     

    & h1{
        color: #2684ff;
    }
`

export const NewsLetter = styled.div`
    @media ${device.mobileS} {
        width: 80%;
    }
    @media ${device.tablet} {
        
        width: 40%;
    }
    display: flex; 
    flex-direction: column;     

    & h2{
        color: #2684ff;
    }
`
export const Input = styled.input`
    width: 100%; 
    background-color: #fff;
    padding: 0.75rem 1.25rem; 
    font-size: 1rem;
    font-weight: 400; 
    line-height: 1.5; 
    color: #8492a6;
    transition: 0.2s; 
    box-shadow: none;
    border: 1px solid #e0e6ed; 
    border-radius: .25rem; 

    &:focus{
        outline: 0; 
        border-color: rgba(38, 132, 255, 0.7); 
        box-shadow: 0 0 1.25rem rgba(31,45,61,.08); 
    }
`

export const Subscribe = styled.button`
    border: none;
    
    background-color: #2684ff;
    color: white; 
    padding: 12px 30px 12px 30px;
    border-radius: 50px; 
    font-size: 1rem; 
    width: 100%; 
    text-align: center; 
    margin-top: 1rem; 
    margin-bottom: 1rem;
    transition: 0.15s;  

    &:hover{
        opacity: 0.8; 
        cursor: pointer;
    }

    &:focus{
        outline: none;
    }

    &:disabled{
        cursor: default; 
        opacity: 0.8; 
    }
`