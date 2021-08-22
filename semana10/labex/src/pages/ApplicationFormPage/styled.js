import styled from "styled-components";
import { FormGroup } from '@material-ui/core';

export const StyledForm = styled(FormGroup)`
    width: 50vw;
    min-width: 320px;
    margin: 15px;

    * {
        width: 100%;
    }

    input, select {
        margin: .3rem 0;
        height: 2rem;
        padding: .5rem;
    }

    textarea {
        margin: .3rem 0;
        padding: .5rem;
    }

`