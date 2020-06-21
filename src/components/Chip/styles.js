import styled from 'styled-components'

export const Container = styled.div`
    display: flex; 
    justify-content: center; 
    /* align-items: center;  */
    padding: 4px 12px 4px 12px; 
    border-radius: 15px; 
    width: fit-content;
    background-color: ${props => props.color};
    margin: 0px 2px 0px 0px; 
`

export const Item = styled.p`
    margin: 0px; 
    color: #ffffff; 
    font-size: 0.9rem; 
`

export const IconContainer = styled.div`
    display: flex; 
    align-items: center; 
    margin-right: 2px; 

    &:hover{
        cursor: pointer;
    }

`