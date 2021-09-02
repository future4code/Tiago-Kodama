import { useContext, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import GlobalContext from "../global/GlobalContext";
import { goToLogin, goToPosts } from "../routers/coordenator"

export function useProtectedPage(){
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalContext)
    
    useLayoutEffect(() => {
        
        const token = window.localStorage.getItem('token')
        if(!token) goToLogin(history)
        
    }, [history])
}