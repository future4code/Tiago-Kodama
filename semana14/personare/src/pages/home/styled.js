import styled, { keyframes } from "styled-components";
import { bgScreen } from "../../constants/colors/theme"
import { colorPrimary, colorNeutral } from '../../constants/colors/theme'

const buttonAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;        
    }
`

export const StyledHome = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${bgScreen};

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledButton = styled.button`
    width: 240px;
    height: 43px;
    margin: 2rem 0;
    border: none;
    border-radius: 10px;
    background: ${colorPrimary};
    color: ${colorNeutral};
    font-weight: 700;
    font-size: 1rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:hover{
        opacity: .8;
    }

    animation: ${props =>
        props.isStart? buttonAnimation : ''
    } 0.2s linear;
`