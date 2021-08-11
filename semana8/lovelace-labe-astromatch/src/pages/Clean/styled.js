import styled from "styled-components";

export const StyledContainerClean = styled.div`
    width: 100%;
    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.8rem;
        word-wrap: break-word;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        padding: 3rem;
    }

    button {
        color: white;
        background: red;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        padding: .5rem 1rem;
    }

`