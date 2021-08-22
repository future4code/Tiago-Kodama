import axios from 'axios'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { urlLogin } from '../../constants/apiLabex';
import { pathAdmin } from '../../constants/paths';
import { useForm } from '../../hooks/useForm';
import { Container, Box, ButtonPrimary, PageTitle, ButtonAction } from '../../style/global'
import { StyledForm } from './styled'
import { Alert } from '@material-ui/lab'

export default function LoginPage() {
    const { form, onChange } = useForm({ email: '', password: '' })
    const [errMessage, setErrMessage] = useState('')
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()

        const body = form

        axios.post(urlLogin, body)
            .then(res => {
                window.localStorage.setItem('token', res.data.token)
                history.push(pathAdmin)
            })
            .catch(err => { setErrMessage(err.response.data.message) })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) history.goBack()

        // eslint-disable-next-line
    }, [])

    return (
        <Container>
              <Box>
                <PageTitle>Login</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push('/')}>Página inicial</ButtonPrimary>
                <ButtonPrimary onClick={() => history.goBack()}>Voltar</ButtonPrimary>
            </Box>
            <Box>
                <StyledForm onSubmit={handleSubmit}>
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
                    <ButtonAction type='submit'>Pronto</ButtonAction>
                </StyledForm>
            </Box>
            <Box>
                {errMessage!=='' && <Alert severity="error">{errMessage}</Alert>}
            </Box>
        </Container>
    );
}