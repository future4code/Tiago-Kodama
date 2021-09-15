import { useHistory } from 'react-router'
import { StyledCard } from './styled'
import { goToDetails } from '../../routes/coordenator'

export default function Card({id, name, srcFront, srcBack, isFront, scrollTo, isStart}){
    const history = useHistory()
    const handleSelectCard = id => {
        if(isFront) return

        goToDetails(history, id)
    }
    
    return (
        <StyledCard 
            scrollTo={scrollTo} 
            isStart={isStart}
            onClick={() => handleSelectCard(id)}
        >
            <img src={isFront? srcFront: srcBack} alt={name}/>
        </StyledCard>
    );
}