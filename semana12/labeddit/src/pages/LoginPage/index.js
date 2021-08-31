import Alert from '@material-ui/lab/Alert';
import Form from "../../components/form";
import GlobalContext from "../../global/GlobalContext";
import { useState } from 'react';
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { useContext } from "react";
import { Button } from "@material-ui/core";
import { StyledLoginPage } from './styled'
import { goToSignUp } from "../../routers/coordenator"

export default function LoginPage() {
  useUnprotectedPage()

  const { requests } = useContext(GlobalContext)
  const [message, setMessage] = useState('')
  const { form, handleInputChange, clear } = useForm({Email: '', Password: ''})
  const history = useHistory()

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
      <Form 
        title={'Login'}
        inputs={inputs}
        onsubmit={handleSubmit}
        form={form}
        />
      <Button
        onClick={() => goToSignUp(history)}
        >I don't have account</Button>
    {message && <Alert severity="warning">{message}</Alert>}
    </StyledLoginPage>
  );
}