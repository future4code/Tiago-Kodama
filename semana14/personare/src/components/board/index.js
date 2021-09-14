import { StyledBoard, StyledButtonLeft, StyledButtonRight } from './styled'

export default function Board({children}){
    return (
        <StyledBoard>
            <StyledButtonLeft>Prev</StyledButtonLeft>
            {children}
            <StyledButtonRight>Next</StyledButtonRight>
        </StyledBoard>
    );
}