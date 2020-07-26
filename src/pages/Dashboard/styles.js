import styled from 'styled-components'
import { device } from '@/theme'
import { Colors } from '@/styles'

export const Column = styled.div` 
    height: 100%;  
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 10px;
    margin-right: 10px;

    @media ${device.mobileS} {
        width: 100%;
      }
      @media ${device.mobileM} {
        width: 100%;
      }
      @media ${device.mobileL} {
        width: 100%;
      }
      @media ${device.tablet} {
        width: 100%;
      }
      @media ${device.tabletL} {
        width: 50%;
        float: left;
      }
      @media ${device.laptop} {
        width: 50%;
        float: left;
      }
`

export const Sections = styled.div`

@media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.laptop} {
    display: flex;
  }

`

export const ProfileLeft = styled.div`
    width: 25%; 
    height: 100%;  
    float: left;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 10px;
    margin-right: 10px;
`
export const ProfileRight = styled.div`
    width: 75%; 
    height: 100%;  
    float: left;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 10px;
    margin-right: 10px;
`

export const Text = styled.div`
    width: 100%;
    margin-left: 20px;  
`

export const Row = styled.div`
    width: 100%;  
    display: flex;
    flex-direction: row;
    align-items: center; 
`

export const Label = styled.p`
    font-weight: bold;
    color: white;
`
export const Data = styled.div`
    background-color: black ;
    color: white;
    border: ${props => props.edit ? 'white solid 3px' : 'none'};
    /* border-color: white;
    border-style: solid; */
    border-radius: 5px;
    height: 50%;
    width: 90%;
    white-space: no-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Class = styled.div`
    width: 100%;
    padding: 5px;
    clear: left;
`

export const ClassText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 0;
    text-align: center;
`

export const EditInput = styled.input`
  width: 90%; 
  border: ${props => props.edit ? 'white solid 3px' : 'white solid 3px'};
  padding: 5px; 
  background-color: ${Colors.WLF_PURPLE}; 
  /* background-color: ${props => props.edit ? `${Colors.WLF_PURPLE}` : 'black'};  */
  color: white; 
  border-radius: 5px;

  opacity: ${props => props.edit ? 1 : 0.7}; 

  &:focus{
    outline: none; 
  }
`

export const Cancel = styled.b`
  color: white; 
  transition: 0.2s; 

  &:hover{
    text-decoration: underline; 
    cursor: pointer; 
  }
`
