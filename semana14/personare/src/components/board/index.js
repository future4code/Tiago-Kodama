import { StyledBoard } from './styled'

export default function Board({children}){
    return (
        <StyledBoard>
            {children}
        </StyledBoard>
    );
}