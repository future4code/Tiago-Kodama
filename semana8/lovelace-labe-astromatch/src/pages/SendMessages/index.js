import CardMessage from "../../componets/CardMessage";
import {StyledMenssageBoard, StyledInputMessage, StyledSendMessageContainer} from './styled'

export default function SendMessages(){
    return (
        <StyledSendMessageContainer>
            <StyledMenssageBoard>
                <CardMessage />
                <CardMessage />
                <CardMessage />
                <CardMessage />
                <CardMessage />
                <CardMessage />
                <CardMessage />
            </StyledMenssageBoard>
            <StyledInputMessage>
                <input />
                <button>Enviar</button>
            </StyledInputMessage>
        </StyledSendMessageContainer>
    );
}