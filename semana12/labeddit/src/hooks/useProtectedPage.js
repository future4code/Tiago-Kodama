import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../routers/coordenator"

export function useProtectedPage(){
    const history = useHistory()

    useLayoutEffect(() => {

        const token = window.localStorage.getItem('token')

        if(!token) goToLogin(history)

    }, [history])
}