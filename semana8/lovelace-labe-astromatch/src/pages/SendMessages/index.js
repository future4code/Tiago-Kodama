import { useEffect, useState } from "react";
import CardMessage from "../../componets/CardMessage";
import { StyledMenssageBoard, StyledInputMessage, StyledSendMessageContainer, StyledWriting } from './styled'

import axios from "axios";
import {chatBotURL} from '../../constants/rapidAPI'
import {englishToPortuguese, portugueseToEnglish} from '../../utils/translate'

export default function SendMessages(props) {

    const [messages, setMessages] = useState([])
    const [inputMessage, setInputMessage] = useState('')
    const [isHeWritting, setIsHeWritting] = useState(false)
    const [isHisTurn, setIsHisTrurn] = useState(false)


    const handleEnter = async () => {
        if (!inputMessage) return
        feedSendMessages(inputMessage)
        setInputMessage('')
    }

    const feedSendMessages = async text => {
        const newMessage = {
            author: 'Você',
            text: text,
            timeStamp: Date.now()
        }
        const newList = [...messages, newMessage]
        setMessages(newList)
        setIsHisTrurn(true)
    }

    const feedReceiveMessage = async () => {
        try {
            const message = messages[messages.length-1].text
            const messageEn = await portugueseToEnglish(message)

            const options = {
                method: 'GET',
                url: chatBotURL,
                params: {message: `${messageEn}`, uid: props.profile.id},
                headers: {
                  'x-rapidapi-key': '4b3a452826msh742903192d79ac4p1f2704jsn2c2287fdf21b',
                  'x-rapidapi-host': 'ai-chatbot.p.rapidapi.com'
                }
              };              

            const res = await axios.request(options)
            const himText = res.data.chatbot.response
            const messagePt = await englishToPortuguese(himText)

            const newMessage = {
                author: 'Meu futuro amor',
                text: messagePt,
                timeStamp: Date.now()
            }
            setMessages([...messages, newMessage])
            setIsHeWritting(false)
            setIsHisTrurn(false)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if(isHisTurn){
            setIsHeWritting(true)
            feedReceiveMessage()
        }
    }, [isHisTurn])

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