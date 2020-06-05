import styled from 'styled-components'
import {Colors} from '../../styles'
import { device } from '../../theme'

export const MetaContainer = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    @media ${device.laptop} {
        min-width: 400px;
    }
`

export const AboutDescription = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    backgroundColor: 'green';
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    align-content: center;
    padding: 60px;
`

export const HeaderImage = styled.img`
    width: 90%;
    max-width: 400px;
    height: auto;
    align-self: center;
    justify-self: center;
    padding: 20px;
`

export const MediumContainer = styled.div`
    max-width: 1024px;
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    justify-content: center;
    align-content: center;
    justify-items: center;
    padding: 60px;
`

export const MediumImage = styled.img`
    width: 80%;
    height: auto;
    align-self: center;
    justify-self: center;
    padding: 20px;
`

export const Image = styled.img`
    @media ${device.mobileS} {
        width: 35%;
        margin-top: 4em;
    }
    @media ${device.tablet} {
        width: 25%;
        margin-top: 4em;
    }
    @media ${device.tabletL} {
        width: 25%;
        margin-top: 0;
    }

    @media ${device.laptop} {
        width: 25%;
        margin-top: 0;
    }

    height: auto;
`

export const Highlight = styled.img`
    position: absolute;
    z-index: 1;
`

export const HighlightStyle1 = styled.img`
    position: absolute;
    z-index: 1;
    width: 140px;
    height: 200px;
    @media ${device.mobileS} {
        top: 5px;
        left: 140px;
    }
    @media ${device.mobileM} {
        top: 5px;
        left: 170px;
    }
    @media ${device.mobileL} {
        top: 5px;
        left: 190px;
    }
    @media ${device.tablet} {
        top: 5px;
        left: 180px;
    }
    @media ${device.tabletL} {
        top: 5px;
        left: 180px;
    }
    @media ${device.laptop} and (min-width: 500px) {
        top: 5px;
        left: 180px;
    }
    @media ${device.laptop} and (max-width: 500px) {
        top: 5px;
        left: 180px;
    }
`

export const DescItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 40px;
    justify-content: flex-start;
`

export const DescImage = styled.img`
    height: 110px;
    width: auto;
    margin-bottom: 10px;
`

export const Button = styled.div`
    display: flex;
    background-color: ${Colors.WLF_ORANGE};
    color: white;
    padding: 12.5px 25px 12.5px 25px;
    margin-right: 20px;
    align-items: center;
    width: fit-content;
    border-radius: 10px;

    & p{
        margin: 0px;
        font-size: 1.2em;
    }
`

export const SubHeaderContainer = styled.div`
    width: 85%;
`

export const NewsLetter = styled.div`
    @media ${device.mobileS} {
        width: 80%;
    }
    @media ${device.tablet} {

        width: 40%;
    }
    display: flex;
    flex-direction: column;

    & h2{
        color: #2684ff;
    }
`
export const Input = styled.input`
    width: 100%;
    background-color: #fff;
    padding: 0.50rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #8492a6;
    transition: 0.2s;
    box-shadow: none;
    border: 1px solid #e0e6ed;
    border-radius: .50rem;
    font-family: 'Muli', sans-serif;
    font-weight: '700';
    &:focus{
        outline: 0;
        border-color: rgba(38, 132, 255, 0.7);
        box-shadow: 0 0 1.25rem rgba(31,45,61,.08);
    }
`

export const Popup = styled.div`
    background-color: #2684ff;
    padding: 20px;
    box-shadow: 0 0 1.25rem rgba(31,45,61,.3);
    border-radius: 5px;
    position: relative;
    margin-bottom: 2rem;
	transition: all 1s cubic-bezier(.25,.8,.25,1);
    opacity: ${props => props.subscribed ? '1' : '0'};


    & p{
        margin: 0px;
        color: #fff;
    }
`

export const Error = styled.p`
    color: #ff5630;
    font-size: 0.9rem;
    margin: 0px;
`
