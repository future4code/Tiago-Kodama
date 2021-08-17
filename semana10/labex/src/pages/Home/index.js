import {useHistory} from 'react-router-dom'

export default function Home(){
    const history = useHistory()
    return (
        <div>
            <p>Home</p>
            <button onClick={() => history.push('/trips/list')}>ListTrips</button>
            <button onClick={() => history.push('/login')}>Admin</button>
        </div>
    );
}