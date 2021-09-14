import styled from "styled-components";
import { bgHeader, colorNeutral } from '../../constants/colors/theme'

export const StyledHeader = styled.div`
    margin: 0;
    height: 50px;
    width: 100vw;
    background: ${bgHeader};

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: start;
`

export const StyledButton = styled.button`
    grid-column: 1 / 2;
    grid-rows; 1 / 2;
    background: none;
    border: none;
    color: ${colorNeutral};
    font-size: 1rem;
`

export const StyledTitle = styled.h1`
    grid-column: 2 / 3;
    grid-rows; 1 / 2;
    place-self: center;
    font-size: 1.5rem;
    color: ${colorNeutral};
`
