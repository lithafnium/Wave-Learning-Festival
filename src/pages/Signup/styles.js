import styled from 'styled-components'
import { device } from '../../theme'
export const Container = styled.div`
    width: 100%; 
    height: 100%; 
    min-height: 80vh; 
    display: flex; 
    justify-content: center; 
    @media ${device.mobileS}{
        margin-top: -150px; 
    }
    @media ${device.tablet} {
        margin-top: 0px; 

    }
`

export const ContainerInner = styled.div`
    margin-bottom: 5vh;
    display: flex; 

    @media ${device.mobileS} {
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        width: 80%; 

    }

    @media ${device.tablet} {
        flex-direction: row; 
        margin-top: 0; 
        width: 80%;

    }
    @media ${device.tabletL} {
        margin-top: 0; 
        max-width: 768px;
        width: 100%;

 
    }

    @media ${device.laptop} {
        max-width: 1024px;
        width: 100%;

    }

    & h1{
        color: #2684ff;
    }

`

export const Left = styled.div`
    @media ${device.mobileS}{
        width: 100%; 
    }

    @media ${device.tablet}{
        width: 50%; 
    }
    height: 100%; 
    padding: 15px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 

    
`

export const FormContainer = styled.div`

    @media ${device.mobileS}{
        width: 100%; 
    }

    @media ${device.tablet}{
        width: 40%; 
    }
    height: 100%; 
    padding: 15px; 
`

export const Form = styled.div`
    padding: 30px; 
    display: flex; 
    flex-direction: column; 
    width: 100%; 
    height: 100%; 
    box-shadow: 0 0 1.25rem rgba(31,45,61,.08); 
    border: 1px solid #eff2f7;
    background-color: #fff; 
    justify-content: center;

    & h1{
        margin: 0px; 
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

export const Button = styled.button`
    border: none; 
    color: #fff; 
    margin-top: 2em; 
    font-size: 1rem; 
    font-weight: 500; 
    background-color: rgb(38, 132, 255); 
    border-radius: 25px; 
    padding: 15px 20px 15px 20px; 
    transition: 0.2s; 

    &:focus{
        outline: 0; 
    }

    &:hover{
        background-color: rgba(38, 132, 255, 0.8); 
        cursor: pointer; 
    }
`