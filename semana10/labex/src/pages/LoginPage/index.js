import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { urlLogin } from '../../constants/apiLabex';
import { pathAdmin } from '../../constants/paths';
import { useForm } from '../../hooks/useForm';

import axios from 'axios'


export default function LoginPage() {
    const { form, onChange, cleanFields } = useForm({ email: '', password: '' })
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()

        const body = form

        axios.post(urlLogin, body)
            .then(res => {
                window.localStorage.setItem('token', res.data.token)
                history.push(pathAdmin)
            })
            .catch(err => { alert(err.response.data.message) })

        cleanFields()
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) history.goBack()

        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Email'
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={form['email']}
                    required
                />
                <input
                    placeholder='Senha'
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={form['password']}
                    required
                />
                <button type='submit'>Pronto</button>
            </form>
        </div>
    );
}