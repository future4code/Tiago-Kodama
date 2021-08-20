import axios from 'axios'
import { urlDecideCandidateByTripAndCandidate } from '../../constants/apiLabex'


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

    return <div>
        <div>
            <p><strong>Candidatos</strong></p>
            {candidates.map(candidate => (
                <div key={candidate.id}> 
                    <p>{candidate.name}</p>
                    <button onClick={() => aproveCandidate(candidate, true)}>Aceitar</button>
                </div>
            ))}
        </div>
        <div>
            <p><strong>Aprovados</strong></p>
            {approved.map(candidate => (
                <div key={candidate.id}> 
                    <p>{candidate.name}</p>
                </div>
            ))}
        </div>
    </div>
}