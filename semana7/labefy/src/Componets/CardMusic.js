import React from 'react'

export default class CardMusic extends React.Component{

    render(){
        const handleButton  = this.props.handleButton
        const messageButton  = this.props.messageButton
        const music = this.props.music

        return(
            <div className='CardMusic'>
                <button>Play</button>
                <p>
                    {
                        music.name
                    }
                </p>
                <button
                    onClick={() => handleButton(music)}
                >{messageButton}</button>
            </div>
        );
    }
}