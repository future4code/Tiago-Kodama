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
        color: white;
        opacity: .8;
        border-radius: 20%;
        border: none;
        padding: 2rem;
        max-width: 100px;
        min-width: 80px;
        width: 15vw;
        font-weight: 700;
        font-size: 1rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        &:hover{
            box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        }

        img {
            width: 90%;
        }
    }
`

export const StyledLoading = styled.p`
    margin-top: 10vh;
    font-size: 1.5rem;

`