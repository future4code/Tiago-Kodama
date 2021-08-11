import Styled from 'styled-components'

const StyledHead = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    border-bottom: 1px solid gray;

    button {
        height: 90%;
        border: none;
        background: transparent;

        &:hover {
            height: 80%;
        }
    }


    button img {
        height: 90%;
    }
`

export default StyledHead