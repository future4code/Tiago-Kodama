import React from 'react';
// import './CardPequeno.css';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 7rem;
    padding: 5%;
    border: 1px solid black;
`;

const Imagem = styled.img`
    width: 30px;
    margin-right: 10px;
`;

function CardPequeno(props) {
    return (
        <Container>
            <Imagem 
                src={ props.imagem }
                />
            <p><strong>{props.title}: </strong> { props.texto }</p>
        </Container>
    )
}

export default CardPequeno;