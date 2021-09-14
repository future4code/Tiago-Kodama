import Board from '../../components/board';
import Header from '../../components/header';
import { StyledHome, StyledButton } from './styled'

export default function Home(){

    return (
        <StyledHome>
            <Header />
            <StyledButton>Start</StyledButton>
            <Board 
                isFront={true}
            />
        </StyledHome>
    );
}