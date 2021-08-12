import {StyledCardMatches} from './styled'
import MessageIcon from '../../assets/balao.png'

export default function CardMatch(props){
    const profile = props.profile

    return <StyledCardMatches>
        <img src={profile.photo} alt='profile' />
        <p>{profile.name}</p>
        <button
            onClick={() => props.setCurrentPage('sendmessages')}
        >
            <img src={MessageIcon} alt='message icon' />
        </button>
    </StyledCardMatches>
}