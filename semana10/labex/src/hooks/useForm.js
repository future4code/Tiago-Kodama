import { useState } from "react"

export function useForm(initialState){
    const [form, setForm] = useState(initialState)

    const onChange = (e, validation = () => true) => {
        
        const {name, value} = e.target

        if(!validation(value)) return

        setForm({...form, [name]: value})
    }

    const cleanFields = () => {
        setForm(initialState)
    }

    return {form, onChange, cleanFields}
}