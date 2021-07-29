import React from 'react'

export default class CardMusic extends React.Component{
    render(){
        return(
            <div className='CardMusic'>
                <button>Play</button>
                <p>
                    Info
                </p>
                <button>Remove</button>
            </div>
        );
    }
}