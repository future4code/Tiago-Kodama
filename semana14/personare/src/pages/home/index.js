import { useState } from 'react';
import Board from '../../components/board';
import Header from '../../components/header';
import { StyledHome, StyledButton } from './styled'

export default function Home(){
    const [start, setStart] = useState(false)
    const [isFront, setIsFront] = useState(true)

    return (
        <StyledHome>
            <Header />
            <StyledButton
                start={start}
                onClick={() => setStart(true)}
            >Start</StyledButton>
            <Board 
                isFront={isFront}
                setIsFront={setIsFront}
                start={start}
            />
        </StyledHome>
    );
}