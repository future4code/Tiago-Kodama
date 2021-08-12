import styled from "styled-components";

const StyledCardProfile = styled.div`
    width: 100%;
    max-width: 400px;
    height: 60vh;
    margin-top: 4vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    diaplay: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        margin-bottom: 2vh;
        padding: 10px;

        section {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            padding: 10px;
            width: 167px;
            height: 167px;
        }

        img {
            width: 187px;
            height: 187px;
        }

        p {
            font-size: 1.2rem;
            text-align: justify;
            padding: 2%;
        }
    }

    
`

export default StyledCardProfile