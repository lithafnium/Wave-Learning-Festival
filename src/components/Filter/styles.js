import styled from 'styled-components'
import { Colors } from '@/styles'
export const Container = styled.div`
    width: 100%; 
    margin-bottom: 2rem; 
`

export const ContainerInner = styled.div`
  display: flex;
  align-items: center;
`

export const SearchContainer = styled.div`
  display: flex; 
  align-items: center; 
  width: 50%; 
`

export const FilterContainer = styled.div`
  width: 50%; 
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
    
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
`

export const SearchBar = styled.input`
    font-family: 'Muli', sans-serif;

    width: 95%; 
    height: 35px;
    padding: 2px 2px 2px 10px; 
    border-top-right-radius: 15px; 
    border-bottom-right-radius: 15px;
    margin-right: 15px; 

  background-color: #fff;
  
  /* color: #8492a6; */
  transition: 0.2s;
  box-shadow: none;
  border: 1px solid #e0e6ed;
  border-right: 1px solid #e0e6ed;
  border-bottom: 1px solid #e0e6ed;
  
  &:focus {
    outline: 0;
    border-color: ${Colors.WLF_PURPLE};
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }

  
`

export const SearchIcon = styled.div`
  width: 15%; 
  height: 35px; 
  border: 1px solid #e0e6ed;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  border-top-left-radius: 15px; 
  border-bottom-left-radius: 15px; 
  transition: 0.2s; 
  
  ${SearchBar}:focus & {
    outline: 0; 
    border-color: rgba(38, 132, 255, 0.7) !important;
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08) !important;
  }
  

`

export const CheckboxContainer = styled.div`
  display: flex; 
  flex-wrap: wrap; 
`

export const CheckboxColumn = styled.div`
  margin-right: 1.5em; 
`

export const OptionsContainer = styled.div`
  display: flex; 
  flex-wrap: wrap; 
`
