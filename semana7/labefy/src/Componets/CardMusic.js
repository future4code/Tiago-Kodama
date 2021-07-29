import React from 'react'

export default class CardMusic extends React.Component{
    render(){

        const handleButton  = this.props.handleButton
        const description  = this.props.description
        const messageButton  = this.props.messageButton
        const url  = this.props.url


        return(
            <div className='CardMusic'>
                <button>Play</button>
                <p>
                    {
                        description
                    }
                </p>
                <button
                    onClick={() => handleButton(url)}
                >{messageButton}</button>
            </div>
        );
    }
}