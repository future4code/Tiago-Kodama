import Form from "../../components/form";
import { useForm } from "../../hooks/useForm";
import { signup } from "../../services/accessApp"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"

export default function SignUpPage() {
  useUnprotectedPage()
  
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
    signup(form, clear)
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