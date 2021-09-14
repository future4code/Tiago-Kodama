import { StyledBoard, StyledButtonLeft, StyledButtonRight } from './styled'
import Card from '../card'
import tarot from '../../assets/tarot.json'
import { useState } from 'react'

export default function Board({isFront}){
    const BASE_URL = tarot.imagesUrl
    const imageBack = tarot.imageBackCard
    const [cards, setCards] = useState(tarot.cards)

    const renderCards = cards.map((card, index) => (
        <Card 
            key={index}
            name={isFront? card.name: card.image.replace('arcano', '').replace('.jpg', '')}
            src={isFront? BASE_URL+card.image: imageBack}
        />
    ))

    const handleNext = () => {
        const fistCard = cards.shift()
        setCards([...cards, fistCard])
    }

    const handlePrev = () => {
        const lastCard = cards.pop()
        setCards([lastCard, ...cards])
    }

    return (
        <StyledBoard>
            <StyledButtonLeft
                onClick={handlePrev}
            >Prev</StyledButtonLeft>
                {renderCards}
            <StyledButtonRight
                onClick={handleNext}
            >Next</StyledButtonRight>
        </StyledBoard>
    );
}