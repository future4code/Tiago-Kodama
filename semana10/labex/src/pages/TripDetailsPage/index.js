import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useProtectPage } from '../../hooks/useProtectPage'
import { urlGetTripDetail } from '../../constants/apiLabex';
import { useState } from 'react';

import CardTrip from '../../components/CardTrip';
import ContainerStatusCandidates from '../../components/ContainerStatusCandidates';
import { Container, Box, ButtonPrimary, PageTitle } from '../../style/global'
import { pathAdmin } from '../../constants/paths';

export default function TripDetailsPage() {
    useProtectPage()
    const [tripDetail, setTripDetail] = useState({})
    const params = useParams()
    const history = useHistory()
    const idTrip = params.id

    const getTripDetail = async () => {
        try {
            const token = localStorage.getItem('token')

            if (!token) return
    
            const headers = { auth: token }
            const res = await axios.get(urlGetTripDetail(idTrip), { headers })

            setTripDetail(res.data.trip)

        } catch (error) {
            alert('Erro ao buscar detalhes da viagem.')
        }
    }


    useEffect(() => {
        getTripDetail()
            
    // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <Box>
                <PageTitle>Administração da viagem</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.goBack()}>Voltar</ButtonPrimary>
                <ButtonPrimary onClick={() => history.push(pathAdmin)}>Administração</ButtonPrimary>
            </Box>
            <Box>
                <CardTrip tripInfo={tripDetail} />
            </Box>
            <Box>
                <ContainerStatusCandidates 
                    candidates={tripDetail.candidates} 
                    approved={tripDetail.approved} 
                    trip={tripDetail}
                    updateTripDetail={getTripDetail}
                />
            </Box>
        </Container>
    );
}