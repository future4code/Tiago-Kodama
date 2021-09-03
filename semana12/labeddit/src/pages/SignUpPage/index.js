import Form from "../../components/form";
import Alert from '@material-ui/lab/Alert';
import { useForm } from "../../hooks/useForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { useContext, useState } from 'react'
import { StyledSignUpPage } from './styled'
import GlobalContext from "../../global/GlobalContext";
import { CircularProgress } from "@material-ui/core";

export default function SignUpPage() {

  const { states, requests } = useContext(GlobalContext)
  const { form, handleInputChange, clear } = useForm({ Name: '', Email: '', Password: '' })
  const [message, setMessage] = useState('')

  useUnprotectedPage(message)

  const inputs = [
    {
      label: 'Name',
      type: 'text',
      command: handleInputChange
    },
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
    requests.signup(form, clear, setMessage)
  }


  return (
    <StyledSignUpPage>
      {
        states.isLoading ?
          <CircularProgress margin='normal' /> :
          <>
            <Form
              title={'Sign Up'}
              inputs={inputs}
              onsubmit={handleSubmit}
              form={form}
            />
            {message && <Alert severity="warning">{message}</Alert>}
          </>
      }
    </StyledSignUpPage>
  );
}