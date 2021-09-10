import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components'

export const StyledToobar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    button {
        border: none;
        background: none;
        text-shadow: 2px 1px 0px #fff, 3px 4px 0px rgba(0,0,0,0.15);
    }
`