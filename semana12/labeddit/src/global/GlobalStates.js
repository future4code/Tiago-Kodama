import React, { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"
import axios from 'axios'
import { BASE_URL } from '../constants/urls'


const GlobalState = (props) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const contentLocalStorage = window.localStorage.getItem('token')
        setToken(contentLocalStorage)
    },[])

    const login = async (form, clear, setMessage) => {
        try {
            const url = `${BASE_URL}/users/login`
            const headers = { 'Content-Type': 'application/json' }
            const body = { email: form['Email'], password: form['Password'] }
    
            const res = await axios.post(url, body, { headers })
            window.localStorage.setItem('token', res.data.token)
            setToken(res.data.token)
            setMessage('Welcome')
            clear()
    
        } catch (error) {
            setMessage('We could not find your account')
            console.log(error.response.data)
            error.response.data.errors && error.response.data.errors.forEach(element => {
                console.log(element)
            });
        }
    }

    const signup = async (form, clear, setMessage) => {
        try {
            const url = `${BASE_URL}/users/signup`
            const headers = { 'Content-Type': 'application/json' }
            const body = { username: form['Name'], email: form['Email'], password: form['Password'] }
    
            const res = await axios.post(url, body, { headers })
            window.localStorage.setItem('token', res.data.token)
            setToken(res.data.token)
            setMessage('We have created your account')
            clear()
    
        } catch (error) {
            setMessage('We could not create your account')
            error.response.data.errors && error.response.data.errors.forEach(element => {
                console.log(element)
            });
        }
    }

    const states = { token }
    const setters = { setToken }
    const requests = { login, signup }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState