import Header from '../../components/header';
import { StyledDetails, StyledDetailsContainer, StyleCardHeader } from './styled'
import tarot from '../../assets/tarot.json'
import { useParams } from 'react-router';

export default function Details() {
    const { id } = useParams()
    const BASE_URL = tarot.imagesUrl
    const selectedCard = tarot.cards.find(card => card.image.includes(id))

    return (
        <StyledDetails>
            <Header />
            <StyledDetailsContainer>
                <StyleCardHeader>
                    <img src={BASE_URL+selectedCard.image} alt='imagem' />
                    <div>
                        <h2>
                            {selectedCard.name}
                        </h2>
                        <p>
                            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's.
                        </p>
                    </div>
                </StyleCardHeader>
                <p>
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                </p>
            </StyledDetailsContainer>
        </StyledDetails>
    );
}
