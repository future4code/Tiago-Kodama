import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerCardTrip = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;

`

export const PageTitle = styled.h1`
    margin-top: 4rem;
    text-align: center;
    font-size: 2rem;
`

export const ButtonPrimary = styled(Button)`
    background-color: #0795F6;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    margin: 1rem;
    min-width: 6rem;

    &:hover {
    background-color: #5469d4;
    }
`

export const ButtonAction = styled(Button)`
    background-color: #7d9aad;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    margin: 1rem;
    min-width: 6rem;

    &:hover {
    background-color: #5469d4;
    }
`