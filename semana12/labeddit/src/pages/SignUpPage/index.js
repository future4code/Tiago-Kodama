import Form from "../../components/form";

export default function SignUpPage() {

  const inputs = [
    {
      label: 'Name',
      type: 'text',
      command: () => console.log('input name')
    },
    {
      label: 'Email',
      type: 'email',
      command: () => console.log('input email')
    },
    {
      label: 'Password',
      type: 'password',
      command: () => console.log('input password')
    }
  ]
  

  return (
    <div>
      <Form 
        title={'Sign Up'}
        inputs={inputs}
        onsubmit={() => console.log('clicou em enviar')}
        />
    </div>
  );
}