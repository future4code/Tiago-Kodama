import { StyledCard } from './styled'
import tarot from '../../assets/tarot.json'

export default function Card(){

    const exemplo1 = tarot.cards[2].image
    return (
        <StyledCard>
            <img src={tarot.imagesUrl+exemplo1} alt='carta' />
        </StyledCard>
    );
}