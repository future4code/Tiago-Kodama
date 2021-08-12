import {StyledCardMatches} from './styled'
import MessageIcon from '../../assets/balao.png'

export default function CardMatch(props){
    const profile = props.profile

    const handleButton = () => {
        props.setCurrentPage('sendmessages')
        props.setSelectProfle(profile)
    }

    return <StyledCardMatches>
        <img src={profile.photo} alt='profile' />
        <p>{profile.name}</p>
        <button
            onClick={handleButton}
        >
            <img src={MessageIcon} alt='message icon' />
        </button>
    </StyledCardMatches>
}