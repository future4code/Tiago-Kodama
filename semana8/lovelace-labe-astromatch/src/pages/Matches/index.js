import CardMatch from '../../componets/CardMatch'
import {StyledContainerMatches} from './styled'

export default function Matches(props){
    return <StyledContainerMatches>
        <CardMatch setCurrentPage={props.setCurrentPage}/>
        <CardMatch setCurrentPage={props.setCurrentPage}/>
        <CardMatch setCurrentPage={props.setCurrentPage}/>
        <CardMatch setCurrentPage={props.setCurrentPage}/>
    </StyledContainerMatches>
}