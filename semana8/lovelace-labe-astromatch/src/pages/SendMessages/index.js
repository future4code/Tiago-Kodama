import CardMessage from "../../componets/CardMessage";
import {StyledMenssageBoard, StyledInputMessage} from './styled'

export default function SendMessages(){
    return (
        <div>
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
        </div>
    );
}