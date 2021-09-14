import Board from '../../components/board';
import Card from '../../components/card';
import Header from '../../components/header';
import { StyledOptions, StyledText } from './styled'
import tarot from '../../assets/tarot.json'

export default function Options(){
    return (
        <StyledOptions>
            <Header />
            <StyledText>Select a Card</StyledText>
            <Board>
                <Card />
                <Card />
                <Card />
                <Card />
            </Board>
        </StyledOptions>
    );
}