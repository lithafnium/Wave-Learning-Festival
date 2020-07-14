import styled from 'styled-components'
import { Colors } from '@/styles'

export const Card = styled.div`
    width: 100%; 
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15);
    background-color: #ffffff;
    border-radius: 15px; 

    img {
        
        border-radius: 15px; 

    }
`
export const BlogImage = styled.img`
    width: 100%; 
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15);
    border-radius: 15px; 
    height: auto; 

    padding: ${props => props.padding ? '15px' : '0px'}; 
    z-index: 5; 
`

export const Header = styled.div`
    position: relative; 
    width: 90%; 
    margin-top: -30px; 
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15);
    background-color: #ffffff; 
    height: auto; 
    z-index: 10; 
    padding-top: 25px; 

    border-top-right-radius: 15px; 
    border-bottom-right-radius: 15px; 
    border-bottom-left-radius: 15px; 
`

export const Title = styled.h2`
    font-family: 'Mukta Mahee', sans-serif;
    margin: 0px; 
    color: ${props => props.color} !important;
`

export const Type = styled.p`
    font-family: 'Mukta Mahee', sans-serif;
    margin: 0px; 
    color: #aaaaaa; 
`
export const Heading = styled.div`
    /* padding-top: ${props => props.top ? '25px' : '0px'}; */
    padding-right: ${props => props.right ? '25px' : '0px'};
    padding-bottom: ${props => props.bottom ? '25px' : '0px'};
    padding-left: ${props => props.left ? '25px' : '0px'};

    border-left: ${props => props.color ? `3px solid ${props.color}` : 'none'};
`
