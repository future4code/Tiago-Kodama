import Board from '../../components/board';
import Header from '../../components/header';
import { StyledOptions, StyledText } from './styled'

export default function Options(){
    return (
        <StyledOptions>
            <Header />
            <StyledText>Select a Card</StyledText>
            <Board 
                isFront={false}
            />
        </StyledOptions>
    );
}