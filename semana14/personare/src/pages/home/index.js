import { useState } from 'react';
import Board from '../../components/board';
import Header from '../../components/header';
import { StyledHome, StyledButton } from './styled'

export default function Home(){
    const [isStart, setIsStart] = useState(false)
    const [isFront, setIsFront] = useState(true)

    return (
        <StyledHome>
            <Header />
            <StyledButton
                isStart={isStart}
                onClick={() => setIsStart(true)}
            >Start</StyledButton>
            <Board 
                isFront={isFront}
                setIsFront={setIsFront}
                isStart={isStart}
            />
        </StyledHome>
    );
}