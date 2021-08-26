import axios from 'axios'
import { useProtectPage } from "../../hooks/useProtectPage"
import { useForm } from "../../hooks/useForm"
import { toYyyyMmDd } from '../../services/convertDate'
import { urlCreateTrip } from "../../constants/apiLabex"
import { Container, Box, ButtonPrimary, PageTitle, ButtonAction } from '../../style/global'
import { useHistory } from "react-router-dom"
import { StyledForm } from './styled'
import { useError } from '../../hooks/useError';
import ModalError from '../../components/ModalError';

export default function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ name: '', planet: '', date: '', description: '', durationInDays: '' })
    const { errMessage, setErrMessage } = useError()

    const history = useHistory()
    
    useProtectPage()

    const handleSubmit = e => {
        e.preventDefault()

        const headers = {
            auth: window.localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
        const body = form

        axios.post(urlCreateTrip, body, { headers })
            .then(res => {
                if (res.status === 200) {
                    setErrMessage("Viagem criada com sucesso")
                    cleanFields()
                }
                else {
                    setErrMessage("Viagem não pode ser criada")
                }
            })
            .catch(err => setErrMessage(err.response.data.message))
    }

    return (
        <Container>
            <ModalError message={errMessage} />
            <Box>
                <PageTitle>Criar uma viagem</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.goBack()}>Voltar</ButtonPrimary>
            </Box>
            <Box>
                <StyledForm onSubmit={handleSubmit}>
                    <input
                        title={'É preciso que tenha ao menos 5 caracteres. Podendo ser letras, números ou espaços.'}
                        onChange={onChange}
                        value={form['name']}
                        placeholder='Nome'
                        name='name'
                        type='text'
                        required
                        pattern={"^[a-zA-Z0-9_ ]{5,}$"}
                    />
                    <select name="planet" required value={form['planet']} onChange={onChange}>
                        <option value=''>Selecione uma opção</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Júpiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                    </select>
                    <input
                        onChange={onChange}
                        value={form['date']}
                        name='date'
                        type='date'
                        required
                        min={toYyyyMmDd(Date.now())}
                    />
                    <textarea
                        rows="4" cols="50"
                        title={'É preciso que tenha ao menos 30 caracteres. Podendo ser letras, números ou espaços.'}
                        onChange={onChange}
                        value={form['description']}
                        placeholder='Descrição'
                        name='description'
                        type='text'
                        required
                        pattern={"^.{30,}$"}
                    />
                    {form.description.length > 0 && <p>Número de caracteres {form.description.length}</p>}
                    <input
                        title={'É preciso que tenha ao menos 50 dias.'}
                        onChange={onChange}
                        value={form['durationInDays']}
                        placeholder='Duração em dias'
                        name='durationInDays'
                        type='number'
                        min={50}
                        required
                    />
                    <ButtonAction type='submit'>Pronto</ButtonAction>
                </StyledForm>
            </Box>
        </Container>
    );
}