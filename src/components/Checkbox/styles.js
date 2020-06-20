import styled from 'styled-components'
import { Colors } from "@/styles";

export const Box = styled.div`
    width: 15px; 
    height: 15px; 
    border: 2px solid ${props => props.color};
    border-radius: 2px; 
    margin-right: 10px; 
    transition: 0.15s; 
    background-color: ${props => props.filled ? props.color : "#ffffff"}; 

    &:hover{
        background-color: ${props => props.color};
        cursor: pointer;
    }
`

export const CheckboxContainer = styled.div`
    display: flex; 
    align-items: center; 
`

export const Item = styled.p`
    margin: 0px; 
    font-size: 0.8; 
`