import styled from 'styled-components'
import { device } from '../../theme'

export const Container = styled.div`
    width: 100%; 
    height: 100%; 
    min-height: 80vh; 
    display: flex; 
    justify-content: center; 
`

export const ContainerInner = styled.div`
    width: 80%; 
    margin-bottom: 5vh;

    @media ${device.mobileS} {
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
    }

    @media ${device.tablet} {
        margin-top: 20em; 

    }
    @media ${device.tabletL} {
        margin-top: 0; 
        max-width: 768px;
 
    }

    @media ${device.laptop} {
        max-width: 1024px;
    }

    & h1{
        color: #2684ff;
    }

`