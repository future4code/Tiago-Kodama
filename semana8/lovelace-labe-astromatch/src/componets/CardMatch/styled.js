import styled from "styled-components";

export const StyledCardMatches = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 12vh;
    width: 100%;
    max-width: 900px;
    padding: 1vh;
    margin-top: 20px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    img {
        height: 95%;
        width: 9vh;
    }

    button {
        border: none;
        background: none;
    }

    button img {
        width: 5vh;
        height: 5vh;
        margin-right: 10px;
    }
`
