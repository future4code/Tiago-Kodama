import axios from "axios";
import { BASE_URL } from '../constants/urls'

export const login = async (form, clear) => {
    try {
        const url = `${BASE_URL}/users/login`
        const headers = { 'Content-Type': 'application/json' }
        const body = { email: form['Email'], password: form['Password'] }
    
        const res = await axios.post(url, body, { headers })
        console.log(res.data)
        clear()
        
    } catch (error) {
        console.error(error)
    }
}