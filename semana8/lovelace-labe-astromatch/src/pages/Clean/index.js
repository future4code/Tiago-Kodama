import { StyledContainerClean } from './styled'

import axios from 'axios'
import { cleanURL } from '../../constants/astromatchAPI'
import { useState } from 'react'

export default function Clean() {

    const [message, setMessage] = useState('')

    const handleButtonCleanData = async () => {
        try {
            await axios.put(cleanURL)
            setMessage('Dados limpados com sucesso.')

        } catch (error) {
            console.error(error.response)
            setMessage('Falha ao tentar limpar.')
        }
    }

    const render = () => {
        if (!message) {
            return (
                <>
                    <p>Tem certeza que deseja limpar os dados?</p>
                    <button
                        onClick={handleButtonCleanData}
                    >Remover</button>
                </>
            );
        }
        else {
            return (
                <p>{message}</p>
            );
        }
    }

    return <StyledContainerClean>
        {render()}
    </StyledContainerClean>
}