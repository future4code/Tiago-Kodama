import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useProtectPage } from '../../hooks/useProtectPage'

import { urlGetTripDetail } from '../../constants/apiLabex';

import axios from 'axios'


export default function TripDetailsPage() {
    const params = useParams()
    const idTrip = params.id

    useProtectPage()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) return

        const headers = { auth: token }
        axios.get(`${urlGetTripDetail}/${idTrip}`, { headers })
            .then(res => console.log(res.data))
            .catch(err => alert(err.response.data.message))
    }, [])

    return (
        <div>
            <p>TripDetailsPage</p>
            <p>{params.id}</p>
        </div>
    );
}