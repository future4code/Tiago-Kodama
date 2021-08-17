import {useHistory} from 'react-router-dom'

export default function AdminHomePage(){
    const history = useHistory()
    const id = '123'
    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={() => history.push('/admin/trips/create')}>CreateTrip</button>
            <button onClick={() => history.push(`/admin/trips/${id}`)}>TripDetailsPage</button>
        </div>
    );
}