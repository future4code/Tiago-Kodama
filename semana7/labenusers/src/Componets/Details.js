import React from 'react'
import EditFilds from './EditFilds'

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
            <div className='Details'>
                <p>Name {this.state.name}</p>
                <p>Email {this.state.email}</p>
                <p>ID {this.state.id}</p>
                {
                    this.state.editMode ?
                    <EditFilds 
                        saveChanges={this.saveChanges}
                        id={this.state.id}
                        />:
                    <div>
                        <button 
                            onClick={() => this.handleDeleteUser(this.state.id)}
                        >Delete</button>
                        <button 
                            onClick={() => this.setState({ editMode: true })}
                        >Edit</button>
                    </div>
                }
            </div>
        );
    }
}