import { useEffect, useState } from "react";
import CardMessage from "../../componets/CardMessage";
import { StyledMenssageBoard, StyledInputMessage, StyledSendMessageContainer, StyledWriting } from './styled'

import axios from "axios";

export default function SendMessages() {

    const [messages, setMessages] = useState([{ author: 'Meu futuro amor', text: 'Sorry.. I do not speak portuguese', timeStamp: Date.now() }])
    const [inputMessage, setInputMessage] = useState('')
    const [isHeWritting, setIsHeWritting] = useState(false)

    const handleEnter = async () => {
        if (!inputMessage) return
        feedSendMessages(inputMessage)
        setInputMessage('')
    }

    const feedSendMessages = text => {
        const newMessage = {
            author: 'Você',
            text: text,
            timeStamp: Date.now()
        }
        const newList = [...messages, newMessage]
        setMessages(newList)
        setTimeout(() => setIsHeWritting(true), 2000)
    }

    useEffect(() => {

        const feedReceiveMessage = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://ajith-messages.p.rapidapi.com/getMsgs',
                    params: { category: 'love' },
                    headers: {
                        'x-rapidapi-key': '4b3a452826msh742903192d79ac4p1f2704jsn2c2287fdf21b',
                        'x-rapidapi-host': 'ajith-messages.p.rapidapi.com'
                    }
                };
                const res = await axios.request(options)
                const himText = res.data.Message
                const newMessage = {
                    author: 'Meu futuro amor',
                    text: himText,
                    timeStamp: Date.now()
                }
                setMessages([...messages, newMessage])
                setIsHeWritting(false)

            } catch (error) {
                console.error(error)
            }
        }

        setTimeout(feedReceiveMessage, 7000)

    }, [isHeWritting])

    return (
        <StyledSendMessageContainer>
            <StyledMenssageBoard>
                {messages.map((message, index) => {
                    return <CardMessage
                        key={index}
                        data={message}
                    />
                })}
            {
                isHeWritting && 
                <StyledWriting>
                    <p>Digitando....</p>
                </StyledWriting>
            }
            </StyledMenssageBoard>
            <StyledInputMessage>
                <input
                    value={inputMessage}
                    placeholder='Digite uma mensagem'
                    onChange={e => setInputMessage(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter')
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