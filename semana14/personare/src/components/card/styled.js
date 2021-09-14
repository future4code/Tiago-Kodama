import styled from "styled-components";
import { bgCard } from '../../constants/colors/theme'

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 169px;
    height: 278px;
    margin: 10px;
    border-radius: 10px;
    background: ${bgCard};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    p {
        position: absolute;
        bottom: 1px;
        font-size: .8rem;
    }

    img {
        width: 104px;
        height: 219px;
    }
`