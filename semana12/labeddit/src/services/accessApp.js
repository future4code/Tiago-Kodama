import axios from "axios";
import { BASE_URL } from '../constants/urls'

export const login = async (form, clear) => {
    try {
        const url = `${BASE_URL}/users/login`
        const headers = { 'Content-Type': 'application/json' }
        const body = { email: form['Email'], password: form['Password'] }

        const res = await axios.post(url, body, { headers })
        window.localStorage.setItem('token', res.data.token)
        alert('Welcome')
        clear()

    } catch (error) {
        alert('We could not find your account')
        console.log(error.response.data)
        error.response.data.errors && error.response.data.errors.forEach(element => {
            console.log(element)
        });
    }
}

export const signup = async (form, clear) => {
    try {
        const url = `${BASE_URL}/users/signup`
        const headers = { 'Content-Type': 'application/json' }
        const body = { username: form['Name'], email: form['Email'], password: form['Password'] }

        const res = await axios.post(url, body, { headers })
        window.localStorage.setItem('token', res.data.token)
        alert('We have created your account')
        clear()

    } catch (error) {
        alert('We could not create your account')
        error.response.data.errors && error.response.data.errors.forEach(element => {
            console.log(element)
        });
    }
}