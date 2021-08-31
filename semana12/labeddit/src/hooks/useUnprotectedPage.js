import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

export function useUnprotectedPage(){
    const history = useHistory()

    useLayoutEffect(() => {

        const token = window.localStorage.getItem('token')

        if(token) history.goBack()

    }, [history])
}