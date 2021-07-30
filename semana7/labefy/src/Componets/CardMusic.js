import React from 'react'
import Styled from 'styled-components'

const StyledCard = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: .5rem 0;
    height: 4rem;
    width: 95%;
    border-radius: 10px;
    background: #FFE9CF;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }


    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 50%;
        height: 80%;

        button {
            margin: 0 1rem;
            width: 3rem;
            padding: 5px;
            border-radius: 10px;
            border: none;
            background: tomato;
            color: white;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        
        }
    }

    button {
            margin: 0 1rem;
            border: transparent;
            color: tomato;
            background: transparent;
        }
`

export default class CardMusic extends React.Component{
    render(){
        const handleButton  = this.props.handleButton
        const messageButton  = this.props.messageButton
        const music = this.props.music

        return(
            <StyledCard className='CardMusic'>
                <div>
                    <button
                        onClick={() => this.props.handleButtonPlay([music])}
                    >Play</button>
                    <p>
                        {
                            music.name
                        }
                    </p>
                </div>
                <button
                    onClick={() => handleButton(music)}
                >{messageButton}</button>
            </StyledCard>
        );
    }
}