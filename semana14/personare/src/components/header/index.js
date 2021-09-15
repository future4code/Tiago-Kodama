import { useHistory } from 'react-router';
import { StyledHeader, StyledButton, StyledTitle } from './styled'
import arrowButtonIcon from '../../assets/img/arrow.svg'

export default function Header(){
    const history = useHistory()

    return (
        <StyledHeader>
            {history.location.pathname!=='/' &&
            <StyledButton
                onClick={() => history.push('/')}
            ><img src={arrowButtonIcon} alt='button icon'/></StyledButton>}
            <StyledTitle>Title</StyledTitle>
        </StyledHeader>
    );
}