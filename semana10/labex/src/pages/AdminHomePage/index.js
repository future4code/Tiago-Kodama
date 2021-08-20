import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useProtectPage } from '../../hooks/useProtectPage'
import { pathCreateTrip } from '../../constants/paths'
import { urlGetTrips, urlDeleteTripById } from '../../constants/apiLabex';

import CardTripsToAdmin from '../../components/CardTripsToAdmin';
import { Container, Box, ButtonPrimary, PageTitle, ButtonAction, ContainerCardTrip } from '../../style/global'


export default function AdminHomePage() {
    useProtectPage()

    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        updateTrips()
    }, [])

    const updateTrips = async () => {
        try {
            const res = await axios.get(urlGetTrips)
            setTrips(res.data.trips)

        } catch (error) {
            alert('Erro ao buscar viagems')
        }
    }

    const handleRemoveButton = id => {
        const headers = {
            auth: window.localStorage.getItem("token"),
            "Content-Type": "application/json"
        }

        axios.delete(urlDeleteTripById(id), { headers })
            .then(res => {
                if (res.status === 200) {
                    alert("Viagem removida com sucesso")
                    updateTrips()
                }
                else {
                    alert("Viagem não pode ser criada")
                }
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <Container>
            <Box>
                <PageTitle>Página administrativa</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push('/')}>Página inicial</ButtonPrimary>
            </Box>
            <Box>
                <ContainerCardTrip>
                {trips.map(trip => (
                <CardTripsToAdmin 
                    tripInfos={trip} 
                    handleRemoveButton={handleRemoveButton} 
                    key={trip.id} 
                />))}
                </ContainerCardTrip>
            </Box>
            <Box>
                <ButtonAction onClick={() => history.push(pathCreateTrip)}>Criar viagem</ButtonAction>
            </Box>
        </Container>
    );
}