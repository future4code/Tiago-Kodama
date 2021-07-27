import React from 'react'

export default class Details extends React.Component{

    state = {
        email: '',
        name: '',
        id: ''
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

    render(){
        return (
            <div className='Details'>
                <p>Name {this.state.name}</p>
                <p>Email {this.state.email}</p>
                <p>ID {this.state.id}</p>
                <button 
                    onClick={() => this.handleDeleteUser(this.state.id)}
                >Delete</button>
            </div>
        );
    }
}