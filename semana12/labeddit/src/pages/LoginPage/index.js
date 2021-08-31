import Form from "../../components/form";
import { Button } from "@material-ui/core";
import { useForm } from "../../hooks/useForm";
import { StyledLoginPage } from './styled'
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../routers/coordenator"
import { login } from "../../services/accessApp"

export default function LoginPage() {
  const { form, handleInputChange, clear } = useForm({Name: '', Password: ''})
  const history = useHistory()

  const inputs = [
    {
      label: 'Name',
      type: 'text',
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
    login(form, clear)
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