import styled from "styled-components";
import * as Colors from "./Colors";

export const Button = styled.div`
  background-color: ${({enabled}) => enabled === undefined || enabled ? Colors.WLF_YELLOW : Colors.GRAY};
  border-radius: 15px;
  padding: 4px 20px;
  cursor: ${({enabled}) => enabled === undefined || enabled ? 'pointer' : 'default'};
  margin-top: 40px;
  margin-left: 4px;
  transition: all 0.1s ease;
  &:hover {
    background-color: ${({enabled}) => enabled === undefined || enabled ? Colors.WLF_ORANGE : Colors.GRAY};
  }
  pointer-events: ${({enabled}) => enabled === undefined || enabled ? 'auto' : 'none'};
`


export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 2px solid ${Colors.WLF_YELLOW};
  outline: none;
  font-size: 20px;
  font-family: 'Muli', sans-serif;
  padding: 2px 10px;
  margin-bottom: 20px;
  color: ${Colors.WLF_PURPLE};
  &:focus {
    border: 2px solid ${Colors.WLF_ORANGE};
    background-color: rgb(230,230,230);
  }
`

export const BigInput = styled.textarea`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  border: 2px solid ${Colors.WLF_YELLOW};
  outline: none;
  font-size: 20px;
  font-family: 'Muli', sans-serif;
  padding: 2px 10px;
  margin-bottom: 20px;
  color: ${Colors.WLF_PURPLE};
  &:focus {
    border: 2px solid ${Colors.WLF_ORANGE};
    background-color: rgb(230,230,230);
  }
`

export const RadioInputBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin: 20px
`

export const RadioInputButton = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: ${({many}) => many ? '10px' : '25px'};
  border: 5px solid ${Colors.WLF_YELLOW};
  background-color: ${({selected}) => selected ? Colors.WLF_YELLOW : 'rgba(0,0,0,0)'};
  transition: all 0.2s ease;
  `
