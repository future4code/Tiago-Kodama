import styled from "styled-components";
import { Button } from '@material-ui/core'


export const StyledPost = styled.div`
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: 90%;
    max-width: 500px;

    display: grid;
    grid-template-rows: 30px minmax(100px, max-content) 40px;
    grid-template-columns: 40px 5fr;

    &>*{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    aside {
        grid-row: 1 / 4;
        grid-column: 1 / 2;
        background: #E1E1E1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    header {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        background: #F0F0F0;

        justify-content: flex-start;

        h4 {
            margin: 0 1rem;
            color: #7C7C7C;
        }
        h5 {
            color: #A5A5A5;
        }
    }
    main {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        background: white;
        padding: 1rem;
        max-width: 90%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        p, strong {
            overflow-wrap: break-word;
            max-width: 90%;
            margin: 5px 0;
        }
    }
    footer {
        grid-row: 3 / 4;
        grid-column: 2 / 3;
        background: #F0F0F0;
        justify-content: flex-start;
    }
`

export const StyledButton = styled(Button)`
    border-radius: 20px;
    padding: 0 .5rem;
    margin: 0 .5rem;
    color: #7C7C7C;
`