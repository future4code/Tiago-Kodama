import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useProtectPage } from '../../hooks/useProtectPage'
import { pathCreateTrip } from '../../constants/paths'
import { urlGetTrips, urlDeleteTripById } from '../../constants/apiLabex';

import CardTripsToAdmin from '../../components/CardTripsToAdmin';

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

        axios.delete(urlDeleteTripById(id), {headers})
            .then(res => {
                if(res.status===200){
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
        <div>
            <p>AdminHomePage</p>
            {trips.map(trip => <CardTripsToAdmin object={trip} handleRemoveButton={handleRemoveButton} key={trip.id}/>)}

            <button onClick={() => history.push(pathCreateTrip)}>CreateTrip</button>
        </div>
    );
}