import React, { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"
import axios from 'axios'
import { BASE_URL } from '../constants/urls'


const GlobalState = (props) => {
    const [token, setToken] = useState('')
    const [posts, setPosts] = useState([])
    const [commentsOfSomePost, setCommentsOfSomePost] = useState([])
    const headers = { 'Content-Type': 'application/json' }


    useEffect(() => {
        const contentLocalStorage = window.localStorage.getItem('token')
        setToken(contentLocalStorage)
    }, [])

    const login = async (form, clear, setMessage) => {
        try {
            const url = `${BASE_URL}/users/login`
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

    const getPosts = async (numberPage, setMessage) => {
        try {
            const url = `${BASE_URL}/posts?size=3&page=${numberPage}`
            const res = await axios.get(url, { headers: { ...headers, Authorization: token } })
            setPosts(res.data)

        } catch (error) {
            setMessage('Error when we try to get posts. \n Maybe you have to logout and login.')
            console.log(error.response.data)
        }
    }

    const getPostComments = async (id, setMessage) => {
        try {
            const url = `${BASE_URL}/posts/${id}/comments`
            const res = await axios.get(url, { headers: { ...headers, Authorization: token } })
            setCommentsOfSomePost(res.data)

        } catch (error) {
            setMessage('Error when we try to get comments. \n Maybe you have to logout and login.')
            console.log(error.response.data)
        }
    }

    const votePost = async (id, direction, page, setMessage) => {
        try {
            const url = `${BASE_URL}/posts/${id}/votes`
            const res = await axios.post(url, { direction }, { headers: { ...headers, Authorization: token } })

            if (res.status === 201) {
                console.log(res.data, direction)
                getPosts(page, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your vote. \n Maybe you will have to logout and login.')
            console.log(error.response.data)
        }
    }

    const createComment = async (id, body, setMessage) => {
        try {
            const url = `${BASE_URL}/posts/${id}/comments`
            const res = await axios.post(url, { body }, { headers: { ...headers, Authorization: token } })

            if(res.status===201){
                getPostComments(id, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your vote. \n Maybe you will have to logout and login.')
            console.log(error.response.data)
        }
    }

    const createPost = async (page, title, body, setMessage) => {
        try {
            const url = `${BASE_URL}/posts`
            const res = await axios.post(url, { title, body }, { headers: { ...headers, Authorization: token } })

            if(res.status===201){
                getPosts(page, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your post. \n Maybe you will have to logout and login.')
            console.log(error.response.data)
        }
    }

    const states = { token, posts, commentsOfSomePost }
    const setters = { setToken, setPosts }
    const requests = { login, signup, getPosts, votePost, getPostComments, createComment, createPost }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState