import {useHistory} from 'react-router-dom'

export default function ListTripPage(){

    const history = useHistory()
    return (
        <div>
            <p>ListTripPage</p>
            <button onClick={() => history.push('/trips/application')}>ApplicationFormPage</button>
        </div>
    );
}