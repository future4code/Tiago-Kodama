import styled from "styled-components";
import { bgScreen, bgCard, colorBlack } from "../../constants/colors/theme"

export const StyledDetails = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${bgScreen};

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledDetailsContainer = styled.div`
    background: ${bgCard};
    margin: 2rem 0;
    padding: 1rem;
    width: 80%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    p {
        color: ${colorBlack};
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }
`

export const StyleCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &>img {
        width: 45%;
    }

    &>div {
        width: 45%;

    }
    
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        color: ${colorBlack};
    }
    
`