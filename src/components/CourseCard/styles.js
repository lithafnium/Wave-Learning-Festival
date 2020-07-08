import styled from 'styled-components'
import {Colors} from '@/styles'
import { device } from '../../theme'


export const Header = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between; 
    padding: 0px 25px 0px 25px; 
`
export const Title = styled.div`
    flex-grow: 4; 
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
        margin-top: 0.5em; 
        margin-bottom: 0.5em; 
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

    & h3 {
        font-family: 'Mukta Mahee', sans-serif;
        margin-top: 0.5em; 
        margin-bottom: 0.5em; 
        color: ${props => props.color}
    }

    & p {
        font-family: 'Muli', sans-serif;
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
        margin: 7px 0px 7px 0px; 
    }
`

export const CardExpanded = styled.div`
    width: 100%; 
    justify-content: space-between;
    padding: 15px; 
    @media ${device.mobileS} {
        display: block 
    }
    @media ${device.tablet} {
        display: flex; 
    }
`

export const CourseImage = styled.div`
    & img {
        width: 100%; 
        height: auto; 
        border-radius: 5px; 
        box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.4);
    }

    @media ${device.mobileS} {
        width: 100%; 
    }
    @media ${device.tablet} {
        width: 30%; 
    }
`

export const CourseInfo = styled.div`
    
    @media ${device.mobileS} {
        width: 100%; 
    }
    @media ${device.tablet} {
        width: 60%; 
    }

    & p{
    }

    & h3{
        margin-top: 0px; 
    }
`

export const Heading = styled.div`
    display: flex; 
    align-items: center;     
    & p{
        margin-top: 0.5em;
        margin-bottom: 0.5em;  
    }
`

export const HeaderP = styled.p`
    font-weight: bold; 
    margin-right: 10px !important; 
`

export const Button = styled.button`
  padding: 12px 30px 12px 30px;

  border-radius: 10px;
  border: none;
  background-color: ${props => props.color};
  color: #ffffff !important;
  font-weight: 200;
  font-size: 1em; 
  transition: 0.2s;
  margin-top: 0.5em; 

  & a {
    margin: 0px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const HeadingCompressed = styled.div`
    flex-grow: 3; 
    flex-basis: 0;
    display: flex; 
    align-items: center; 
    flex-wrap: wrap; 
    margin-left: 0.5em; 
    margin-right: 0.5em; 
    transition: 0.2s; 
    opacity: ${props => props.show ? '0' : '1'};
`