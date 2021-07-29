import React from 'react'
import EditFilds from './EditFilds'
import Styled from 'styled-components'

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
`
const ContainerInfo = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 2rem;
    margin-bottom: 2rem;
    width: 50%;
    background: #E3E3E3;

    p {
        margin: 1rem 0;
        font-weight: 700;
    }
`
const Buttons = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`

const Button = Styled.div`
    background: #FB9C17;
    padding: 1rem;
    width: 30%;
    text-align: center;
    color: white;
    font-weight: 700;
`


export default class Details extends React.Component{

    state = {
        email: '',
        name: '',
        id: '',
        editMode: false
    }

    componentDidMount(){
        this.props.database.getUserById(this.props.user.id)
            .then(user => {
                this.setState({email: user.email, name: user.name, id: user.id})
            })
            .catch(err => console.log(err))
    }

    handleDeleteUser = async id => {

        if( !window.confirm(`Deseja deletar ${id}`) )
            return

        try {
            const res = await this.props.database.deleteUser(id)

            if(res.status===200){
                alert("Deletado")
                this.props.setPage('Users')
            }
            else{
                alert("handleDeleteUser achou um erro")
                throw new Error('Erro em handleDeleteUser')
            }
        }
        catch(err){
            console.log(err)
            alert("Falha ao deletar")
        }
    }

    saveChanges = async (newName, newEmail, id) => {
        const name = newName || this.state.name
        const email = newEmail || this.state.email

        try {
            const res = await this.props.database.updateUser({name, email, id})

            if(res.status === 200){
                this.setState({ editMode: false })
                this.props.database.getUserById(this.props.user.id)
                .then(user => {
                    this.setState({email: user.email, name: user.name, id: user.id})
                })
                .catch(err => alert('Erro Details => SaveChanges -> getUserById'))
            }
            else{
                alert('Erro Details -> saveChange -> status != 200')
            }
        }
        catch (err){
            alert("Erro Details -> saveChanges")
        }
    }

    render(){
        return (
            <Container className='Details'>
                <h2>Details</h2>

                <ContainerInfo>
                    <p>Name: {this.state.name}</p>
                    <p>Email: {this.state.email}</p>
                    <p>ID: {this.state.id}</p>
                </ContainerInfo>

                {
                    this.state.editMode ?
                    <EditFilds 
                        saveChanges={this.saveChanges}
                        id={this.state.id}
                    />:
                    <Buttons>
                        <Button 
                            onClick={() => this.handleDeleteUser(this.state.id)}
                        >Delete</Button>
                        <Button 
                            onClick={() => this.setState({ editMode: true })}
                        >Edit</Button>
                    </Buttons>
                }
            </Container >
        );
    }
}