import { StyledCard } from './styled'

export default function Card({id, name, srcFront, srcBack, isFront, scrollTo, isStart}){
    return (
        <StyledCard scrollTo={scrollTo} isStart={isStart}>
            <img src={isFront? srcFront: srcBack} alt={name}/>
        </StyledCard>
    );
}