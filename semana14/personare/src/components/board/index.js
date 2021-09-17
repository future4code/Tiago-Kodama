import { StyledBoard, StyledButtonLeft, StyledButtonRight } from './styled'
import Card from '../card'
import tarot from '../../assets/tarot.json'
import { useEffect, useState } from 'react'
import { randomSort } from '../../tools/randomSort'
import { useHistory } from 'react-router'
import { goToOptions } from '../../routes/coordenator'

export default function Board({isFront, setIsFront,isStart}){
    const BASE_URL = tarot.imagesUrl
    const imageBack = tarot.imageBackCard
    
    const history = useHistory()

    const [cards, setCards] = useState(isFront? tarot.cards: randomSort(tarot.cards))
    const [scrollTo, setScrollTo] = useState('stop')

    useEffect(() => {
        if(scrollTo)
            setTimeout(() => setScrollTo('stop'), 100)

    }, [scrollTo])

    useEffect(() => {
        if(isStart) {
            setTimeout(() => goToOptions(history), 500)
            setTimeout(() => setIsFront(false), 250)
        }

    // eslint-disable-next-line
    }, [isStart])


    const renderCards = cards.map((card, index) => (
        <Card 
            key={index}
            isFront={isFront}
            id={card.image.replace('arcano', '').replace('.jpg', '')}
            name={card.name}
            srcFront={BASE_URL+card.image}
            srcBack={imageBack}
            scrollTo={scrollTo}
            isStart={isStart}
        />
    ))

    const handleNext = () => {
        const fistCard = cards.shift()
        setCards([...cards, fistCard])
        setScrollTo('right')
    }

    const handlePrev = () => {
        const lastCard = cards.pop()
        setCards([lastCard, ...cards])
        setScrollTo('left')
    }

    return (
        <StyledBoard role='combobox'>
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