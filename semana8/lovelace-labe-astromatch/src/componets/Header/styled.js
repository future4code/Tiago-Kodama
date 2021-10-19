import Styled from 'styled-components'

const StyledHead = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    width: 100vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 600px;
        width: 100vw;
        height: 100%;
    }
    
    div button {
        height: 90%;
        border: none;
        background: transparent;

        &:hover {
            opacity: 0.4;
        }
    }


    div button img {
        height: 90%;

    }
`

export default StyledHead