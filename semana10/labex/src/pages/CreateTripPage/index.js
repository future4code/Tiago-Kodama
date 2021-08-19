import { useProtectPage } from "../../hooks/useProtectPage"
import { useForm } from "../../hooks/useForm"
import { toYyyyMmDd } from '../../services/convertDate'
import { urlCreateTrip } from "../../constants/apiLabex"

import axios from 'axios'

export default function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ name: '', planet: '', date: '', description: '', durationInDays: '' })
   
    useProtectPage()

    const handleSubmit = e => {
        e.preventDefault()

        const headers = {
            auth: window.localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
        const body = form

        axios.post(urlCreateTrip, body, {headers})
            .then(res => {
                if(res.status===200){
                    alert("Viagem criada com sucesso")
                    cleanFields()
                }
                else {
                    alert("Viagem não pode ser criada")                
                }
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <div>
            <p>CreateTripPage</p>
            <form onSubmit={handleSubmit}>
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
                {form.description.length>0 && <p>Número de caracteres {form.description.length}</p>}
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
                <button type='submit'>Pronto</button>
            </form>
        </div>
    );
}