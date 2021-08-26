import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { pathLogin } from '../constants/paths';

export function useProtectPage() {
    const history = useHistory()

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (!token) history.replace(pathLogin)

    // eslint-disable-next-line
    }, []) 
}