import { useHistory } from 'react-router';
import { StyledHeader, StyledButton, StyledTitle } from './styled'

export default function Header(){
    const history = useHistory()

    return (
        <StyledHeader>
            {history.location.pathname!=='/' &&
            <StyledButton
                onClick={() => history.push('/')}
            >Back</StyledButton>}
            <StyledTitle>Title</StyledTitle>
        </StyledHeader>
    );
}