import styled from 'styled-components'
import { device } from '../../theme'

export const NavbarContainer = styled.div`
    width: 100%; 
    height: 120px; 
    display: flex; 
    justify-content: center; 
`

export const NavbarInner = styled.div`
    width: 100%; 
    @media ${device.mobleS}{
        max-width: 320px; 
    }
    @media ${device.tablet} {
        max-width: 768px;

    }
    @media ${device.tabletL} {
        max-width: 768px;
       
    }

    @media ${device.laptop} {
        max-width: 1024px;
      
    }
    display: flex; 
    align-items: center; 
    justify-content: space-between;
`

export const Brand = styled.h2`
    margin: 0px; 
    color: #2684ff;
`

export const Links = styled.div`
    @media ${device.mobileS}{
        display: none;
    }

    @media ${device.tablet}{
        display: flex; 
        align-items: center; 
    }

    

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

    & a:visited{
        color: black; 
    }

`

export const NavItem = styled.p`
    margin: 0px; 
    margin-left: 15px; 
    margin-right: 15px;  
    border-bottom: 2px solid white; 
    transition: 0.2s; 

    &:hover{
        border-bottom: 2px solid #21ce99;
    }
`

export const Button = styled.button`
    padding: 15px 40px 15px 40px; 
    
    border-radius: 40px; 
    border: none; 
    background-color: #6e00ff; 
    margin-left: 15px; 
    color: #eeeeee !important; 
    font-weight: 600; 
    font-size: 16px; 
    transition: 0.2s; 
    
    & a{
        margin: 0px; 
    }

    &:hover{
        cursor:pointer; 
        opacity: 0.8; 
    }

    &:focus{
        outline: none; 
    }
`