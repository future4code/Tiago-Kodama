import {useHistory} from 'react-router-dom'

export default function LoginPage(){

    const history = useHistory()
    return (
        <div>
            <p>Login</p>
            <button onClick={() => history.push('/admin/trips/list')}>ApplicationFormPage</button>
        </div>
    );
}