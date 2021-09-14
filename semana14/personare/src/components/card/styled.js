import styled, { keyframes } from "styled-components";
import { bgCard } from '../../constants/colors/theme'

export const moveToRight = keyframes`
    from {
        transform: translate(10px, 0px);
    }

    to {
        transform: translate(0px, 0px);
    }
`

export const moveToLeft = keyframes`
    from {
        transform: translate(0px, 0px);
    }

    to {
        transform: translate(10px, 0px);
    }
`

const verifyMove = (command) => {
    if(command==='right') return moveToRight
    else if(command==='left') return moveToLeft
    return ''
}

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 160px;
    height: 278px;
    margin: 20px;
    border-radius: 10px;
    background: ${bgCard};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    p {
        position: absolute;
        bottom: 8px;
        font-size: .8rem;
    }

    img {
        width: 104px;
        height: 219px;
    }

    animation: ${props =>
        props.scrollTo? verifyMove(props.scrollTo) : ''
    } 0.2s linear;
`