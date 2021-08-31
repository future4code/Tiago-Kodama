import Form from "../../components/form";
import { useForm } from "../../hooks/useForm";

export default function SignUpPage() {
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
    console.log('SignUp', form)
    clear()
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