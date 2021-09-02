import Alert from '@material-ui/lab/Alert';
import Form from "../../components/form";
import GlobalContext from "../../global/GlobalContext";
import { useState } from 'react';
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { useContext } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { StyledLoginPage } from './styled'
import { goToSignUp } from "../../routers/coordenator"

export default function LoginPage() {

  const [message, setMessage] = useState('')
  const { form, handleInputChange, clear } = useForm({ Email: '', Password: '' })
  const { states, setters, requests } = useContext(GlobalContext)
  const history = useHistory()

  useUnprotectedPage(message)

  const inputs = [
    {
      label: 'Email',
      type: 'email',
      command: handleInputChange
    },
    {
      label: 'Password',
      type: 'password',
      command: handleInputChange
    }
  ]


  const handleSubmit = e => {
    e.preventDefault()
    requests.login(form, clear, setMessage)
  }


  return (
    <StyledLoginPage>
      {
        states.isLoading ?
        <CircularProgress margin='normal'/> :
        <>
          <Form
            title={'Login'}
            inputs={inputs}
            onsubmit={handleSubmit}
            form={form}
          />
          <Button
            onClick={() => goToSignUp(history)}
          >I don't have an account</Button>
          {message && <Alert severity="warning">{message}</Alert>}
        </>
      }
    </StyledLoginPage>
  );
}