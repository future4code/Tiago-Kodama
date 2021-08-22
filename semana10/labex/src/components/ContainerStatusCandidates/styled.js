import styled from "styled-components";
import { Container } from "@material-ui/core";

export const StyledContainerStatusCantidates = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;
    min-height: 45vh;
    border-radius: 5px;

    padding: 1vw;
    background: rgb(46,46,46);
    background: radial-gradient(circle, rgba(46,46,46,1) 0%, rgba(0,0,0,1) 100%);

    h2 {
        padding: 1rem;
        color: white;
    }

    div {
        border: 1px solid white;
        border-radius: 5px;
        margin-top: 10px;
    }

    & > div {
        min-width: 350px;
    }

`