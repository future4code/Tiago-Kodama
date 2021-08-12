import { useState } from "react";
import CardMessage from "../../componets/CardMessage";
import {StyledMenssageBoard, StyledInputMessage, StyledSendMessageContainer} from './styled'

export default function SendMessages(){

    const [messages, setMessages] = useState([{author: 'você', text:'oi', timeStamp: Date.now()}])
    const [inputMessage, setInputMessage] = useState('')

    const feedSendMessages = text => {
        const newMessage = {
            author: 'Você',
            text: text,
            timeStamp: Date.now()
        }

        setMessages([...messages, newMessage])
    }

    const handleEnter = () => {
        feedSendMessages(inputMessage)
        setInputMessage('')
    }

    return (
        <StyledSendMessageContainer>
            <StyledMenssageBoard>
               {messages.map((message, index) => {
                   return <CardMessage
                        key={index}
                        data={message}
                   />
               })}
            </StyledMenssageBoard>
            <StyledInputMessage>
                <input 
                    value={inputMessage}
                    onChange={e => setInputMessage(e.target.value)}
                    onKeyDown={e => {
                        if(e.key==='Enter')
                            handleEnter()
                    }}
                />
                <button
                    onClick={handleEnter}
                >Enviar</button>
            </StyledInputMessage>
        </StyledSendMessageContainer>
    );
}