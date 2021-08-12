import { useEffect, useState } from "react";
import CardProfile from "../../componets/CardProfle";
// import Image from '../../assets/circle.png'
import { StyledContainerProfiles, StyledButtonContainer, StyledLoading } from './styled'
import { StyledModal } from './styled'

import axios from 'axios'
import {getProfileURL, choosePersonURL} from '../../constants/astromatchAPI'

export default function Profiles() {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false)
    const [mensagem, setMensagem] = useState('')

    const getProfile = async () => {
        setLoading(true)
        try {
            const res = await axios.get(getProfileURL)
            setProfile(res.data.profile)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const decide = async like => {
        try {
            const body = {
                "id": profile.id,
                "choice": like
            }
            const res = await axios.post(choosePersonURL, body)

            if(res.data.isMatch) {
                setMensagem('Match!')
            }

            getProfile()            
        }
        catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        setTimeout(() => setMensagem(''), 2000)
    }, [mensagem])

    const modal = () => {
        if(mensagem)
            return (
                <StyledModal>
                    <p>Match!</p>
                </StyledModal>
            );
    }

    const render = () => {
        if (!Object.keys(profile).length || loading)
            return <StyledLoading>Loading</StyledLoading>

        return (
            <>
                <CardProfile profile={profile} />
                <StyledButtonContainer>
                    <button
                        onClick={() => decide(false)}
                        style={{background: 'red'}}
                    >
                        Não
                        {/* <img src={Image} alt='button' draggable="false" /> */}
                    </button>
                    <button
                        onClick={() => decide(true)}
                        style={{background: 'green'}}
                    >
                        Sim
                        {/* <img src={Image} alt='button' draggable="false" /> */}
                    </button>
                </StyledButtonContainer>
            </>
        );
    }

    return (
        <StyledContainerProfiles>
            {modal()}
            {render()}
        </StyledContainerProfiles>
    );
}