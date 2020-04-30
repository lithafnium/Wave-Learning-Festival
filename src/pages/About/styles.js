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
        margin-top: 120px 
    }

    @media ${device.mobileM} {
        margin-top: 0px; 
    }

    @media ${device.mobileL} {
        margin-top: 0px; 
    }


    @media ${device.tablet} {
        margin-top: 0px;
    }
    
`

export const ContainerInner = styled.div`
    display: flex; 
    width: 100%; 

    @media ${device.mobileS} {
        margin-top: 20em; 
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
        margin-top: 20em; 
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
    height: auto; 
    margin: 20px; 
`





