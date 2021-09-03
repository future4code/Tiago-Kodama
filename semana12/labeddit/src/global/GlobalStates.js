import React, { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"
import axios from 'axios'
import { BASE_URL } from '../constants/urls'


const GlobalState = (props) => {
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])
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

            setIsLoading(true)
            const res = await axios.post(url, body, { headers })
            window.localStorage.setItem('token', res.data.token)
            setToken(res.data.token)
            setMessage('Welcome')
            setIsLoading(false)
            clear()

        } catch (error) {
            setMessage('We could not find your account')
            setIsLoading(false)

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

            setIsLoading(true)
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
        finally{
            setIsLoading(false)
        }
    }

    const getPosts = async (numberPage, setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/posts?size=3&page=${numberPage}`
            const res = await axios.get(url, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })
            setPosts(res.data)

        } catch (error) {
            setMessage('Error when we try to get posts. \n Maybe you have to logout and login.')
            console.log(error.response.data)
        }
        finally{
            setIsLoading(false)
        }
    }

    const getAllPosts = async (numberPage ,setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/posts?size=12&page=${numberPage}`
            const res = await axios.get(url, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })
            // setAllPosts([...allPosts, ...res.data])

            let all = new Set([...allPosts, ...res.data]);
            setAllPosts([...all]);

        } catch (error) {
            setMessage('Error when we try to get posts. \n Maybe you have to logout and login.')
            console.log(error.response.data)
        }
        finally{
            setIsLoading(false)
        }
    }

    const getPostComments = async (id, setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/posts/${id}/comments`
            const res = await axios.get(url, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })
            setCommentsOfSomePost(res.data)

        } catch (error) {
            setMessage('Error when we try to get comments. \n Maybe you have to logout and login.')
            console.log(error.response.data)
        }
        finally {
            setIsLoading(false)
        }
    }

    const votePost = async (id, direction, page, setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/posts/${id}/votes`
            const res = await axios.post(url, { direction }, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })

            if (res.status === 201) {
                getPosts(page, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your vote. \n Maybe you will have to logout and login.')
            console.log(error.response)
        }
        finally{
            setIsLoading(false)
        }
    }

    const voteComment = async (id, postId, setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/comments/${id}/votes`
            const res = await axios.post(url, { direction: 1 }, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })

            if (res.status === 201) {
                getPostComments(postId, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your vote. \n Maybe you will have to logout and login.')
            console.log(error.response.data)
        }
        finally{
            setIsLoading(false)
        }
    }

    const changeVoteComment = async (id, postId, setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/comments/${id}/votes`
            const res = await axios.put(url, { direction: -1 }, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })

            if (res.status === 200) {
                getPostComments(postId, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your vote. \n Maybe you will have to logout and login.')
            console.log(error.response.data)
        }
        finally{
            setIsLoading(false)
        }
    }

    const deleteVoteComment = async (id, postId, setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/comments/${id}/votes`
            const res = await axios.delete(url, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })

            if (res.status === 204) {
                getPostComments(postId, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your vote. \n Maybe you will have to logout and login.')
            console.log(error.response.data)
        }
        finally{
            setIsLoading(false)
        }
    }

    const createComment = async (id, body, setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/posts/${id}/comments`
            const res = await axios.post(url, { body }, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })

            if(res.status===201){
                getPostComments(id, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your vote. \n Maybe you will have to logout and login.')
            console.log(error.response.data)
        }
        finally{
            setIsLoading(false)
        }
    }

    const createPost = async (page, title, body, setMessage) => {
        try {
            setIsLoading(true)
            const url = `${BASE_URL}/posts`
            const res = await axios.post(url, { title, body }, { headers: { ...headers, Authorization: window.localStorage.getItem('token') } })

            if(res.status===201){
                getPosts(page, setMessage)
            }

        } catch (error) {
            setMessage('Error when we try to register your post. \n Maybe you will have to logout and login.')
            console.log(error.response.data)
        }
        finally{
            setIsLoading(false)
        }
    }

    const states = { token, posts, commentsOfSomePost, isLoading, allPosts }
    const setters = { setToken, setPosts, setIsLoading, setAllPosts }
    const requests = { login, signup, getPosts, votePost, getPostComments, createComment, createPost, voteComment, changeVoteComment, deleteVoteComment, getAllPosts }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState