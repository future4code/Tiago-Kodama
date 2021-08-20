import {useHistory} from 'react-router-dom'
import { pathApplicationFormPage } from '../../constants/paths';
import CardTripsToSubscribe from '../../components/CardTripsToSubscribe';

import {Container, Box, ButtonPrimary, PageTitle} from '../../style/global'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { urlGetTrips } from '../../constants/apiLabex';

export default function ListTripPage(){
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
                <PageTitle>List Trip Page</PageTitle>
            </Box>
            <Box>
                {trips.map(trip => <CardTripsToSubscribe object={trip}/>)}
                <ButtonPrimary onClick={() => history.push(pathApplicationFormPage)}>ApplicationFormPage</ButtonPrimary>
            </Box>
        </Container>
    );
}