import { StyledCard } from './styled'

export default function Card({id, name, srcFront, srcBack, isFront, scrollTo, start}){
    return (
        <StyledCard scrollTo={scrollTo} start={start}>
            <img src={isFront? srcFront: srcBack} alt={name}/>
        </StyledCard>
    );
}