import styled from "styled-components";

export const StyledMenssageBoard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-y: auto;

    width: 100%;
    height: 80vh;
    padding-top: 1rem;
    padding-bottom: 2rem;
    margin-top: 4px;

    background: rgb(244,244,244);
    background: linear-gradient(123deg, rgba(244,244,244,1) 0%, rgba(199,199,199,1) 100%);
`

export const StyledInputMessage = styled.div`
    width: 100%;
    background: #1C2833;
    height: 10vh;
    padding: 0 2vw;

    display: flex;
    align-items: center;
    justify-content: space-around;

    input {
        width: 70vw;
        height: 50%;
        padding-left: 1rem; 
        outline: none;
    }

    button {
        width: 15vw;
        height: 50%;
        font-weight: 700;
        background: #17A589;
        color: #F7F9F9;
        border: none;
        border-radius: 3px;
    }
`