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

export const Error = styled.p`
    color: #ff5630; 
    font-size: 0.9rem; 
    margin: 0px; 
`

export const Icon = styled.div`
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }
`
export const Property = styled.div`
  display: flex;
`;

export const PopUp = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0,0.2)
`

export const PopUpInner = styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    border-radius: 20px;
    background: white;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`

export const Text = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    height: 75%;
    overflow: auto;
    padding: 5px;
`

export const Heading = styled.div`
    display: flex;
    margin: 10px;
`
