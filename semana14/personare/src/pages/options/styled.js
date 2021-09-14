import styled from "styled-components";
import { bgScreen, colorNeutral } from "../../constants/colors/theme"

export const StyledOptions = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${bgScreen};

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${colorNeutral};
    margin: 2rem 0;
`