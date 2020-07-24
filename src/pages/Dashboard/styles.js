import styled from 'styled-components'
import { device } from '@/theme'

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
`

export const Label = styled.p`
    font-weight: bold;
    color: white;
`
export const Data = styled.div`
    color: white;
    border-color: white;
    border-style: solid;
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