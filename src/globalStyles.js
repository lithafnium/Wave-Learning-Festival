import styled from 'styled-components'
import { device } from './theme'
export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    @media ${device.tablet} {
        margin-top: 0px;

    }
`

export const ContainerInner = styled.div`
    margin-bottom: 5vh;

    @media ${device.mobileS} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;

    }

    @media ${device.tablet} {
        margin-top: 0;
        width: 80%;

    }
    @media ${device.tabletL} {
        margin-top: 0;
        max-width: 768px;
        width: 100%;


    }

    @media ${device.laptop} {
        max-width: 1024px;
        width: 100%;

    }

`
