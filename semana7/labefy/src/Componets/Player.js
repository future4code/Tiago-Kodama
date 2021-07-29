import React from 'react'

export default class Player extends React.Component{
    render(){
        return(
            <div className='Player'>
                <audio autoplay="autoplay" controls="controls">
                    <source src="http://spoti4.future4.com.br/1.mp3" type="audio/mp3" />
                    seu navegador não suporta HTML5
                </audio>
            </div>
        );
    }
}