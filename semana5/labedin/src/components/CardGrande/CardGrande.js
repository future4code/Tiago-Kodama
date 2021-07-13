import React from 'react';
// import './CardGrande.css'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Title = styled.h4`
    margin-bottom: 15px;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <Container>
            <Imagem src={ props.imagem } />
            <SubContainer>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </SubContainer>
        </Container>
    )
}

export default CardGrande;