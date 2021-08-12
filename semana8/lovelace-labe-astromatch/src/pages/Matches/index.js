import CardMatch from '../../componets/CardMatch'
import {StyledContainerMatches} from './styled'

import axios from 'axios'
import {getMatchesURL} from '../../constants/astromatchAPI'
import { useEffect, useState } from 'react'

export default function Matches(props){

    const [matches, setMatches] = useState([])

    const getMatches = async () => {
        try {
            const res = await axios.get(getMatchesURL)
            setMatches(res.data.matches)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMatches()
    }, [])

    return <StyledContainerMatches>
        {!matches.length? <p>Você não tem nenhum match</p> :
        matches.map(match => <CardMatch 
            key={match.id}
            setCurrentPage={props.setCurrentPage}
            profile={match}
        />)}
    </StyledContainerMatches>
}