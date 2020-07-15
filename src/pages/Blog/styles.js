import styled from 'styled-components'
import { device } from '@/theme'
export const BlogContainer = styled.div`
    width: 100%; 
    display: flex; 
    flex-wrap: wrap; 
`

export const Column = styled.div`
    padding: 15px; 
    /* display: flex; 
    justify-content: center;  */
    @media ${device.mobleS} {
    width: 100%; 
  }
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.tabletL} {
    width: 33.33333%; 
  }
`
