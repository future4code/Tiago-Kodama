import styled from "styled-components";

export const StyledCardMatches = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 10vh;
    width: 100%;
    max-width: 350px;
    padding: 1vh;
    margin-top: 20px;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    img {
        height: 8vh;
        width: 8vh;
    }

    button {
        border: none;
        background: none;
    }

    button img {
        width: 5vh;
        height: 5vh;
        margin-right: 5px;
    }
`
