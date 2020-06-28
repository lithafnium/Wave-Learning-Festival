import styled from 'styled-components'
import {Colors} from '@/styles'

export const Header = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between; 
    padding: 0px 25px 0px 25px; 
`
export const Title = styled.div`
    flex-grow: 3; 
    flex-basis: 0;
    flex-wrap: wrap; 
`

export const Teachers = styled.div`
    flex-grow: 3; 
    flex-basis: 0;
    display: flex; 
    align-items: center; 
`

export const Category = styled.div`
    flex-grow: 2; 
    flex-basis: 0;
    display: flex; 
    align-items: center; 
`


export const ListContainer = styled.div`
    width: 100%; 
`

export const Card = styled.div`
    width: 100%; 
    margin-top: 15px; 
    margin-bottom: 15px; 
    background-color: #ffffff;
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.1);
    border-radius: 5px; 
    border-left: 5px solid ${props => props.color}; 
    padding: 0px 25px 0px 25px; 
    transition: 0.1s; 
    &:hover{
        box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.3);
    }

`

export const CardCompressed = styled.div`
    display: flex; 
    width: 100%; 
    transition: 0.2s; 
    &:hover{
        opacity: 0.8; 
        cursor: pointer; 
    }

    & p {
        margin: 15px 0px 15px 0px; 
    }
`