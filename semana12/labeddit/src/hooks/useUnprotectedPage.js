import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

export function useUnprotectedPage(message){
    const history = useHistory()

    useLayoutEffect(() => {

        const token = window.localStorage.getItem('token')

        if(token) history.push('/')

    }, [history, message])
}