import axios from 'axios'
import CardTrip from '../../components/CardTrip';
import { useHistory } from 'react-router-dom'
import { pathApplicationFormPage } from '../../constants/paths';
import { urlGetTrips } from '../../constants/apiLabex';
import { useState, useEffect } from 'react';
import { Container, Box, ButtonPrimary, PageTitle, ContainerCardTrip } from '../../style/global'

export default function ListTripPage() {
    const [trips, setTrips] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios.get(urlGetTrips)
            .then(res => setTrips(res.data.trips))
            .catch(() => alert('Erro ao buscar viagems'))
    }, [])

    return (
        <Container>
            <Box>
                <PageTitle>Lista de viagens</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push('/')}>Página inicial</ButtonPrimary>
                <ButtonPrimary onClick={() => history.push(pathApplicationFormPage)}>Candidatar à viagem</ButtonPrimary>
            </Box>
            <Box>
                <ContainerCardTrip>
                {trips.map(trip => <CardTrip key={trip.id} tripInfo={trip} />)}
                </ContainerCardTrip>
            </Box>
        </Container>
    );
}