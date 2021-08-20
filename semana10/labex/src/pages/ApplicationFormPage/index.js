import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm"
import { urlGetAllCountrys } from "../../constants/apiPublics"
import { urlGetTrips, urlApplyToTripById } from "../../constants/apiLabex"

import { Container, Box, ButtonPrimary, PageTitle, ButtonAction } from '../../style/global'
import { useHistory } from "react-router-dom"

import { StyledForm } from './styled'

export default function ApplicatioinFormPage() {

    const [allCountryName, setAllCountryName] = useState([])
    const [allTrips, setAllTrips] = useState([])
    const history = useHistory()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        trip: ""
    })

    const handleSubmit = e => {
        e.preventDefault()

        const headers = { "Content-Type": "application/json" }
        const body = form
        axios.post(urlApplyToTripById(form.trip), body, { headers })
            .then(res => {
                alert(res.data.message)
                cleanFields()
            })
            .catch(() => alert("Erro ao tentar aplicar a vaga."))
    }

    useEffect(() => {

        axios.get(urlGetTrips)
            .then(res => setAllTrips(res.data.trips))
            .catch(() => alert("Não foi possível buscar a lista de viagens."))

        axios.get(urlGetAllCountrys)
            .then(res => setAllCountryName(res.data))
            .catch(() => alert("Não foi possível buscar o nome dos países."))
    }, [])

    return (
        <Container>
            <Box>
                <PageTitle>Formulário para se candidatar a vaga</PageTitle>
            </Box>
            <Box>
                <ButtonPrimary onClick={() => history.push('/')}>Página inicial</ButtonPrimary>
                <ButtonPrimary onClick={() => history.goBack()}>Voltar</ButtonPrimary>
            </Box>
            <Box>
                <StyledForm onSubmit={handleSubmit}>
                    <input
                        title={'É preciso que tenha ao menos 3 caracteres. Podendo ser letras, números ou espaços.'}
                        onChange={onChange}
                        value={form['name']}
                        placeholder='Nome'
                        name='name'
                        type='text'
                        required
                        pattern={"^[a-zA-Z0-9_ ]{3,}$"}
                    />
                    <input
                        title={'É preciso que tenha ao menos 18 anos.'}
                        onChange={onChange}
                        value={form['age']}
                        placeholder='Idade'
                        name='age'
                        type='number'
                        required
                        min={18}
                    />
                    <textarea
                        rows="4" cols="50"
                        title={'É preciso que tenha ao menos 30 caracteres. Podendo ser letras, números ou espaços.'}
                        onChange={onChange}
                        value={form['applicationText']}
                        placeholder='Carta de apresentação'
                        name='applicationText'
                        type='text'
                        required
                        pattern={"^.{30,}$"}
                    />
                    {form.applicationText.length > 0 && <p>Número de caracteres {form.applicationText.length}</p>}
                    <input
                        title={'É preciso que tenha ao menos 10 caracteres. Podendo ser letras, números ou espaços.'}
                        onChange={onChange}
                        value={form['profession']}
                        placeholder='Profissão'
                        name='profession'
                        type='text'
                        required
                        pattern={"^.{10,}$"}
                    />
                    <select name="country" required value={form['country']} onChange={onChange}>
                        <option value=''>Selecione uma país</option>
                        {allCountryName.map((country, index) => <option value={country.name} key={index}>{country.name}</option>)}
                    </select>
                    <select name="trip" required value={form['trip']} onChange={onChange}>
                        <option value=''>Selecione uma viagem</option>
                        {allTrips.map((trip) => <option value={trip.id} key={trip.id}>{trip.name} - {trip.planet}</option>)}
                    </select>
                    <ButtonAction type='submit'>Pronto</ButtonAction>
                </StyledForm>
            </Box>
        </Container>
    );
}