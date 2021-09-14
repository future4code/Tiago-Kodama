import { StyledCard } from './styled'

export default function Card({id, name, srcFront, srcBack, isFront, scrollTo}){
    return (
        <StyledCard scrollTo={scrollTo}>
            <img src={isFront? srcFront: srcBack} alt={name}/>
        </StyledCard>
    );
}