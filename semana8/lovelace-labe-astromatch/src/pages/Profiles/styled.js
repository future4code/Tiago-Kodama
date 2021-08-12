import styled from "styled-components";

export const StyledContainerProfiles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const StyledButtonContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin-top: 4vh;
    display: flex;
    justify-content: space-around;

    button {
        background: none;
        border: none;
        max-width: 100px;
        min-width: 80px;
        width: 15vw;

        img {
            width: 90%;
        }
    }
`

export const StyledLoading = styled.p`
    margin-top: 10vh;
    font-size: 1.5rem;

`

export const StyledModal = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    padding-top: 30vh;

    background: black;
    opacity: .85;

    display: flex;
    justify-content: center;

    p {
        font-size: 3rem;
        font-weight: 500;
        color: white;
        text-shadow: 1px 1px 1px #000;
    }
`