import { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { urlLogin } from '../../constants/apiLabex';
import { pathAdmin } from '../../constants/paths';

import axios from 'axios'


export default function LoginPage() {
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()

        const body = {
            "email": "astrodev@gmail.com.br",
            "password": "123456"
        }
        axios.post(urlLogin, body)
            .then(res => {
                window.localStorage.setItem('token', res.data.token)
                history.push(pathAdmin)
            })
            .catch(err => { alert(err.response.data.message) })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) history.goBack()

    }, [])

    return (
        <div>
            <p>Login</p>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Email" variant="outlined" type='email' />
                <TextField id="outlined-basic" label="Senha" variant="outlined" type='password' />
                <button type='submit' onClick={handleSubmit}>Pronto</button>
            </form>
        </div>
    );
}