import styled from 'styled-components'
import { Colors } from '@/styles'
export const SpeakerContainer = styled.div`
    width: 100%; 
    
    padding: 2em;  
     box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15); 
    border-radius: 10px; 

    h1 {
        margin: 0px; 
        color: ${Colors.WLF_TURQOUISE};
    }

    p {
        margin-top: 0px; 
    }
`

export const SpeakerContainerInner = styled.div`
display: flex; 
    justify-content: space-between;
`

export const SpeakerImage = styled.img`
    width: 15em; 
    height: 15em; 
    margin-right: 30px; 
    border-radius: 50%; 
    border: 5px solid ${Colors.WLF_TURQOUISE};
    object-fit: cover; 
`

export const Description = styled.p`
    margin: 0px; 
`
export const Button = styled.button`
    border: none; 
    padding: 12px 20px 12px 20px; 
    background-color: ${Colors.WLF_TURQOUISE};
    color: white; 
    font-size: 0.9rem; 
    border-radius: 25px; 
    margin-top: 15px; 
    font-family: 'Muli', sans-serif;
    font-weight: 700; 

`
