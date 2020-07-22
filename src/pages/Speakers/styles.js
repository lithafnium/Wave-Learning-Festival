import styled from 'styled-components'
import { Colors } from '@/styles'
import { device } from '@/theme'

export const Featured = styled.h1`
    color: ${Colors.WLF_PURPLE} !important;
`
export const Row = styled.div`
    margin-bottom: 2rem; 
    /* display: grid;
  width: 100%;
  grid-gap: 2rem;
  margin-top: 20px;
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, [col-start] minmax(200px, 1fr) [col-end]);
  
  @media ${device.tablet} {
    grid-template-columns: repeat(1, [col-start] minmax(200px, 1fr) [col-end]);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(1, [col-start] minmax(200px, 1fr) [col-end]);
  } */
`