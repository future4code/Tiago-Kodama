import styled from "styled-components";

export const StyledComment = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 1rem 0;
    border-radius: 8px;
    background: white;
    padding: 5px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    &>div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: #B7B7B7;
        width: 100%;
        height: 2.5rem;
        border-radius: 8px;
        box-sizing: border-box;

        h4 {
            margin: 0 1rem;
            color: white;
        }
        h5 {
            color: #ECEBEB;
        }
    }

    &>p{
        background: #F1F1F1;
        width: 100%;
        min-height: 80px;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 10px;
    }
`