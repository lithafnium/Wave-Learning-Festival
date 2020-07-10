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

    & p{
        font-size: ${props => props.show ? '1.5em' : '1em'};
        transition: 0.1s; 

    }
`

export const Teachers = styled.div`
    flex-grow: 3; 
    flex-basis: 0;
    display: flex; 
    align-items: center; 
    flex-wrap: wrap; 
    & p{
        margin-right: 4px !important; 
    }
    transition: 0.1s; 
    opacity: ${props => props.show ? '0' : '1'};
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
    margin-top: 7px; 
    margin-bottom: 7px; 
    background-color: #ffffff;
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.1);
    border-radius: 5px; 
    border-left: 5px solid ${props => props.color}; 
    padding: 0px 25px 0px 25px; 
    transition: 0.1s; 
    &:hover{
        box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.3);
    }
    font-family: 'Muli', sans-serif;

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
        margin: 7px 0px 7px 0px; 
    }
`

export const CardExpanded = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between;
    padding: 15px; 
`

export const CourseImage = styled.div`
    width: 30%; 
    & img {
        width: 100%; 
        height: auto; 
        border-radius: 5px; 
        box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.4);
    }
`

export const CourseInfo = styled.div`
    width: 60%; 

    & p{
    }

    & h3{
        margin-top: 0px; 
    }
`