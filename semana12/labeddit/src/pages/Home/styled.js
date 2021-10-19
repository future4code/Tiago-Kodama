import styled from "styled-components";

export const StyledPostsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 3rem 0;

    & > div {
        margin: 1rem 0;
    }
`

export const StyledForm = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;
    padding: 5px;
    padding-bottom: 20px;
    margin-bottom: 30px;
    width: 100vw;
    max-width: 500px;
`