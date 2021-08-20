import axios from 'axios'
import { urlDecideCandidateByTripAndCandidate } from '../../constants/apiLabex'
import {StyledContainerStatusCantidates} from './styled'

import CardPersonsToAdmin from '../CardPersonsToAdmin'

export default function ContainerStatusCandidates({candidates=[], approved=[], trip={}, updateTripDetail}){

    const aproveCandidate = async (candidate, isAproved) => {
        try {
            const url = urlDecideCandidateByTripAndCandidate(trip.id, candidate.id)
            const headers = {
                auth: window.localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
            const body = { 
                approve: isAproved
             }
    
            const res = await axios.put(url, body, {headers})
            alert(res.data.message)
            updateTripDetail()

        } catch (error) {
           alert("Falha ao tentar aceitar a candidatura.") 
        }  

    }

    return <StyledContainerStatusCantidates>
        <div>
            <h2>Candidatos</h2>
            {candidates.map(candidate => (
                <CardPersonsToAdmin 
                    key={candidate.id}
                    personInfos={candidate}
                    handleButtons={{
                        "Aceitar": () => aproveCandidate(candidate, true)
                    }}
                />
            ))}
        </div>
        <div>
            <h2>Aprovados</h2>
            {approved.map(candidate => (
                <CardPersonsToAdmin 
                    key={candidate.id} 
                    personInfos={candidate}
                />
            ))}
        </div>
    </StyledContainerStatusCantidates>
}