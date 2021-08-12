import {StyledCardMatches} from './styled'
import ProfilePicture from '../../assets/profile.jpeg'
import MessageIcon from '../../assets/balao.png'

export default function CardMatch(props){
    return <StyledCardMatches>
        <img src={ProfilePicture} alt='profile' />
        <p>Dinossauro Predador Rex</p>
        <button
            onClick={() => props.setCurrentPage('sendmessages')}
        >
            <img src={MessageIcon} alt='message icon' />
        </button>
    </StyledCardMatches>
}