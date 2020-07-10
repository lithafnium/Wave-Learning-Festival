import styled from 'styled-components'
import * as Colors from './Colors';

export const Header = styled.h1`
    color: ${({ color}) => color || Colors.WLF_PURPLE};
    font-size: ${({fontSize}) => fontSize || '48px'}; 
    font-family: 'Mukta Mahee', sans-serif;
    margin: 6px;
`

export const Header2 = styled.h1`
    color: ${({ color}) => color || Colors.WLF_PURPLE};
    font-size: ${({fontSize}) => fontSize || '18px'}; 
    font-family: 'Mukta Mahee', sans-serif;
    margin: 6px;
`

export const BodyText = styled.p`
    color: ${({ color}) => color || Colors.WLF_PURPLE};
    font-size: ${({fontSize}) => fontSize || '18px'};
    font-family: 'Muli', sans-serif;
    margin: 6px;
`

export const Name = styled.h1`
    color: ${Colors.WLF_BLACK};
    font-size: 18px; 
    font-family: 'Mukta Mahee', sans-serif;
    margin: 4px;
`
export const School = styled.p`
    color: ${Colors.GRAY};
    font-size: 14px;
    font-family: 'Muli', sans-serif;
    font-weight: 700;
    margin: 4px;
`

export const Position = styled.h1`
    color: ${Colors.DARK_GRAY};
    font-size: 16px;
    font-family: 'Muli', sans-serif;
    font-weight: bold;
    margin: 12px 4px;
`