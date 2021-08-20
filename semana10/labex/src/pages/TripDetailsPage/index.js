import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useProtectPage } from '../../hooks/useProtectPage'
import { urlGetTripDetail } from '../../constants/apiLabex';
import { useState } from 'react';

import CardTripDetail from '../../components/CardTripDetail';
import ContainerStatusCandidates from '../../components/ContainerStatusCandidates';

export default function TripDetailsPage() {
    useProtectPage()
    const [tripDetail, setTripDetail] = useState({})
    const params = useParams()
    const idTrip = params.id

    const getTripDetail = async () => {
        try {
            const token = localStorage.getItem('token')

            if (!token) return
    
            const headers = { auth: token }
            const res = await axios.get(urlGetTripDetail(idTrip), { headers })

            setTripDetail(res.data.trip)
            console.log(tripDetail)

        } catch (error) {
            alert('Erro ao buscar detalhes da viagem.')
        }
    }


    useEffect(() => {
        getTripDetail()
            
    // eslint-disable-next-line
    }, [])

    return (
        <div>
            <p>TripDetailsPage</p>
            <CardTripDetail object={tripDetail} />
            <ContainerStatusCandidates 
                candidates={tripDetail.candidates} 
                approved={tripDetail.approved} 
                trip={tripDetail}
                updateTripDetail={getTripDetail}
            />
        </div>
    );
}