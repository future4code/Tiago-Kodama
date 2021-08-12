import styled from "styled-components";

export const StyledSendMessageContainer = styled.div`
    max-width: 800px;
    width: 100%;
`

export const StyledMenssageBoard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-y: scroll;

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
        max-width: 500px;
        height: 50%;
        padding-left: 1rem; 
        outline: none;
        background: #E5E8E8;
        border-radius: 8px;
        border: none;
    }

    button {
        min-width: 70px;
        width: 5vw;
        height: 50%;
        font-weight: 700;
        background: #17A589;
        color: #F7F9F9;
        border: none;
        border-radius: 3px;
    }
`

export const StyledWriting = styled.div`
    width: 90%;
    padding: .5rem;
    line-height: 1.6;
    padding-left: .9rem;
    margin: 8px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background: rgb(241,247,255);
    background: linear-gradient(123deg, rgba(241,247,255,1) 0%, rgba(231,255,252,1) 100%);

    
`