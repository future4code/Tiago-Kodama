import styled from "styled-components";
import { bgHeader, colorNeutral } from '../../constants/colors/theme'

export const StyledHeader = styled.div`
    margin: 0;
    height: 50px;
    width: 100vw;
    background: ${bgHeader};

    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 3;
    align-items: center;
`

export const StyledButton = styled.button`
    grid-column: 1 / 2;
    grid-rows; 1 / 2;
    border: 1px solid black;
    background: none;
    color: ${colorNeutral};
    font-size: 1rem;

`

export const StyledTitle = styled.h1`
border: 1px solid black;

    grid-column: 2 / 3;
    grid-rows; 1 / 2;
    font-size: 1.5rem;
    color: ${colorNeutral};
`