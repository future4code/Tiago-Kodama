import styled from "styled-components";

export const StyledCommentPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    padding-top: 3rem;

    & > div {
        margin-top: 1rem 0;
    }

`

export const StyledCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background: #e3e3e3;
    padding: 1rem;
    margin-top: 2rem;
    box-sizing: border-box;
`
export const StyledForm = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F3F3F3;
    border-radius: 10px;
    padding: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    input {
        width: 90%;
        border-radius: 10px;
        border: none;
        padding: .8rem;

        &:focus {
            outline: none;
        }

    }
    button {
        min-width: 90px;
        width: 10%;
        border: none;
        background: #CFCFCF;
        padding: .6rem;
        margin-left: 10px;

    }

`