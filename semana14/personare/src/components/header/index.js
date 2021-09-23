import { useHistory } from 'react-router';
import { StyledHeader, StyledButton, StyledTitle } from './styled'
import arrowButtonIcon from '../../assets/img/arrow.svg'

export default function Header() {
    const history = useHistory()

    const title = () => {
        switch (history.location.pathname) {
            case '/':
                return 'Tarot'
            case '/options':
                return 'Options'
            default:
                return 'Detail';
        }
    }

    return (
        <StyledHeader>
            {history.location.pathname !== '/' &&
                <StyledButton
                    onClick={() => history.push('/')}
                ><img src={arrowButtonIcon} alt='button icon' /></StyledButton>}
            <StyledTitle>{title()}</StyledTitle>
        </StyledHeader>
    );
}