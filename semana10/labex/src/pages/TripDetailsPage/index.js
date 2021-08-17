import {useParams} from 'react-router-dom'

export default function TripDetailsPage(){
    const params = useParams()
    return (
        <div>
            <p>TripDetailsPage</p>
            <p>{params.id}</p>
        </div>
    );
}