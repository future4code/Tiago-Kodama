import styled from "styled-components";
import { colorPrimary } from '../../constants/colors/theme'

export const StyledBoard = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background: gray;
    position: relative;
`
    
export const StyledButtonLeft = styled.button`
    position: absolute;
    left: 10px;

    border-radius: 5px;
    padding: 5px 8px;
    border: none;
    color: white;
    background: ${colorPrimary};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`
export const StyledButtonRight = styled.button`
    position: absolute;
    right: 10px;

    border-radius: 5px;
    padding: 5px 8px;
    border: none;
    color: white;
    background: ${colorPrimary};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`