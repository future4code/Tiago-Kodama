import { useProtectPage } from "../../hooks/useProtectPage"
import { useForm } from "../../hooks/useForm"
import { toYyyyMmDd } from '../../services/convertDate'

export default function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ name: '', planet: '', date: '', description: '', durationInDays: '' })
    useProtectPage()

    const handleSubmit = e => {
        e.preventDefault()

        console.log(form)
        cleanFields()
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
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
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