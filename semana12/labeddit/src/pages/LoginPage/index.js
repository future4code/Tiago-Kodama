import Form from "../../components/form";
import { useForm } from "../../hooks/useForm";

export default function LoginPage() {
  const { form, handleInputChange, clear } = useForm({Name: '', Password: ''})

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

    console.log('Send', form)
    clear()
  }


  return (
    <div>
      <Form 
        title={'Login'}
        inputs={inputs}
        onsubmit={handleSubmit}
        form={form}
        />
    </div>
  );
}