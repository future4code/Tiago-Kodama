import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="card-pequeno-container">
            <img src={ props.imagem } alt={ props.title }/>
            <p><strong>{props.title}: </strong> { props.texto }</p>
        </div>

    )
}

export default CardPequeno;