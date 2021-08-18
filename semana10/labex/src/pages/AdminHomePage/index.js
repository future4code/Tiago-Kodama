import { useHistory } from 'react-router-dom'
import { useProtectPage } from '../../hooks/useProtectPage'
import { pathCreateTrip, pathTripsDetailsPage } from '../../constants/paths'

export default function AdminHomePage() {
    const history = useHistory()
    const idTrip = 'DSpdgQP4TKgo5xH1Hlcp'

    useProtectPage()

    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={() => history.push(pathCreateTrip)}>CreateTrip</button>
            <button onClick={() => history.push(`${pathTripsDetailsPage}/${idTrip}`)}>TripDetailsPage</button>
        </div>
    );
}