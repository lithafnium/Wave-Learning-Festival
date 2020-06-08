import styled from 'styled-components'

export const Container = styled.div`
    width: 100%; 
    height: 100%; 
    min-height: 100vh; 
    display: flex; 
    justify-content: center; 
`

export const ContainerInner = styled.div`
    margin-bottom: 5vh;
    display: flex; 
    align-items: center; 

    & h1{
        color: #2684ff;
    }

`

export const Input = styled.input`
    width: 50%; 
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

export const Subscribe = styled.button`
    border: none;
    
    background-color: #2684ff;
    color: white; 
    padding: 12px 30px 12px 30px;
    border-radius: 50px; 
    font-size: 1rem; 
    width: 50%; 
    text-align: center; 
    margin-top: 1rem; 
    margin-bottom: 1rem;
    transition: 0.15s;  

    &:hover{
        opacity: 0.8; 
        cursor: pointer;
    }

    &:focus{
        outline: none;
    }

    &:disabled{
        cursor: default; 
        opacity: 0.8; 
    }
`

export const Error = styled.p`
    color: #ff5630; 
    font-size: 0.9rem; 
    margin: 0px; 
`