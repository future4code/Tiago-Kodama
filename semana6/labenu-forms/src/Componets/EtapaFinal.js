import React from 'react';
import Styled from 'styled-components'

const Etapa = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40vw;
`
class EtapaFinal extends React.Component {
    render() {

        return (
            <Etapa>
                <h2>O FORMULÁRIO ACABOU</h2>

                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Etapa>
        );
    }
}

export default EtapaFinal;