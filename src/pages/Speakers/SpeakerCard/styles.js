import styled from 'styled-components'
import { device } from '@/theme'

export const Card = styled.div`
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15); 
    height: auto; 
    padding: 35px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    border-radius: 10px; 

    width: 100%; 
`

export const Speaker = styled.img`
    width: 11em; 
    height: 11em; 
    object-fit: cover; 
    border-radius: 50%; 
    margin-bottom: 2em; 
    border: 5px solid ${props => props.color}; 
`

export const Info = styled.div`

`

export const Header = styled.h2`
    color: ${props => props.color};
    margin: 0px; 
`

export const Details = styled.p`
    margin: 0px; 
    color: #aaaaaa; 
`
export const Button = styled.button`
    border: none; 
    padding: 12px 20px 12px 20px; 
    background-color: ${props => props.color};
    color: white; 
    font-size: 0.9rem; 
    border-radius: 25px; 
    font-family: 'Muli', sans-serif;
    font-weight: 700; 
    transition: 0.2s; 

    &:focus{
        outline: none;
    }

    &:hover{
        cursor: pointer; 
        opacity: 0.8; 
    }
`
