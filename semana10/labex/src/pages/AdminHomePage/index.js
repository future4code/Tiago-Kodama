import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useProtectPage } from '../../hooks/useProtectPage'
import { pathCreateTrip } from '../../constants/paths'
import { urlGetTrips, urlDeleteTripById } from '../../constants/apiLabex';

import CardTripsToAdmin from '../../components/CardTripsToAdmin';
import { Container, Box, ButtonPrimary, PageTitle, ButtonAction, ContainerCardTrip } from '../../style/global'
import { useError } from '../../hooks/useError';
import ModalError from '../../components/ModalError';


export default function AdminHomePage() {
    useProtectPage()
    
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const { errMessage, setErrMessage } = useError()

    useEffect(() => {
        updateTrips()
    }, [])

    const updateTrips = async () => {
        try {
            const res = await axios.get(urlGetTrips)
            setTrips(res.data.trips)

        } catch (error) {
            setErrMessage('Erro ao buscar viagems')
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
                    setErrMessage("Viagem removida com sucesso")
                    updateTrips()
                }
                else {
                    setErrMessage("Viagem não pode ser criada")
                }
            })
            .catch(err => setErrMessage(err.response.data.message))
    }
    
    return (
        <Container>
            <ModalError message={errMessage} />
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