import Board from '../../components/board';
import Card from '../../components/card';
import Header from '../../components/header';
import { StyledHome, StyledButton } from './styled'

export default function Home(){
    return (
        <StyledHome>
            <Header />
            <StyledButton>Start</StyledButton>
            <Board>
                <Card />
                <Card />
                <Card />
                <Card />
            </Board>
        </StyledHome>
    );
}