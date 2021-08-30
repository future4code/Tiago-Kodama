import Form from "../../components/form";

export default function LoginPage() {

  const inputs = [
    {
      label: 'Name',
      type: 'text',
      command: () => console.log('input name')
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
        title={'Login'}
        inputs={inputs}
        onsubmit={() => console.log('clicou em enviar')}
        />
    </div>
  );
}