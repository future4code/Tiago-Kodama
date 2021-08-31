import Form from "../../components/form";
import GlobalContext from "../../global/GlobalContext";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { useContext } from "react";
import { Button } from "@material-ui/core";
import { StyledLoginPage } from './styled'
import { goToSignUp } from "../../routers/coordenator"

export default function LoginPage() {
  useUnprotectedPage()

  const { states, setters, requests } = useContext(GlobalContext)

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
    requests.login(form, clear)
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
    </StyledLoginPage>
  );
}