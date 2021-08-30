import styled from "styled-components";

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
        color: #929292;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        & > * {
            margin: 1rem 0;
        }
    }
`