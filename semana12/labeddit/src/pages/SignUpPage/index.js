import Form from "../../components/form";
import { useForm } from "../../hooks/useForm";
import { signup } from "../../services/accessApp"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { useContext } from 'react'
import GlobalContext from "../../global/GlobalContext";

export default function SignUpPage() {
  useUnprotectedPage()
  
  const { states, setters, requests } = useContext(GlobalContext)
  const { form, handleInputChange, clear } = useForm({ Name: '', Email: '', Password: '' })


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
    requests.signup(form, clear)
  }
  

  return (
    <div>
      <Form 
        title={'Sign Up'}
        inputs={inputs}
        onsubmit={handleSubmit}
        form={form}
        />
    </div>
  );
}