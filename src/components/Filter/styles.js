import styled from 'styled-components'

export const Container = styled.div`
    width: 100%; 
    margin-bottom: 2rem; 
`

export const ContainerInner = styled.div`
  display: flex;
  align-items: center;
`

export const FilteredBar = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    width: 100%; 
    height: ${props => props.isEmpty ? '35px' : 'fit-content'};
    padding: 2px 2px 2px 2px; 
    border: 1px solid black; 
    border-radius: 15px; 
    margin-right: 15px; 

  background-color: #fff;
  
  color: #8492a6;
  transition: 0.2s;
  box-shadow: none;
  border: 1px solid #e0e6ed;

  &:focus {
    outline: 0;
    border-color: rgba(38, 132, 255, 0.7);
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
`

export const SearchBar = styled.input`
    width: 100%; 
    height: 35px;
    padding: 2px 2px 2px 10px; 
    border: 1px solid black; 
    border-radius: 15px; 
    margin-right: 15px; 

  background-color: #fff;
  
  color: #8492a6;
  transition: 0.2s;
  box-shadow: none;
  border: 1px solid #e0e6ed;

  &:focus {
    outline: 0;
    border-color: rgba(38, 132, 255, 0.7);
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
`