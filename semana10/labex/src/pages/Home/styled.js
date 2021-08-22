import styled from "styled-components";
import { Container } from "@material-ui/core";
import BgImage from '../../assets/bg-home.jpg'

export const StyledContainer = styled(Container)`
    background-color: black;
    background-image: url(${BgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size:  contain, cover;

    width: 100vw;
    height: 100vh;

    h1 {
        color: white;
    }

    p {
        color: white;
        text-align: center;
        margin: 50px 0;
    }

`