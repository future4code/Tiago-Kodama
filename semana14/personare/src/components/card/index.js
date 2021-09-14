import { StyledCard } from './styled'

export default function Card({key, name, src}){
    return (
        <StyledCard>
            <p>{name}</p>
            <img src={src} alt={name}/>
        </StyledCard>
    );
}