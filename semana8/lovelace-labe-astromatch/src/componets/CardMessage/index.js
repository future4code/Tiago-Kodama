import {StyledCardMessage} from './styled'

export default function CardMessage({data}){
    const date = new Date(data.timeStamp)

    return <StyledCardMessage>
        <p>
            <small>Enviou às {date.toLocaleTimeString()}</small>
            <br />
            <strong>{data.author}: </strong>
            {data.text}
        </p>
    </StyledCardMessage>
}