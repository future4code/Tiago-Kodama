import React from 'react'
import User from './User';

export default class Users extends React.Component{

    state = {
        allUsers: [],
        selectedUserId: undefined,
        inputSearch: ''
    }

    componentDidMount(){
        this.props.database.getAllUsers()
            .then(allUsersFromDatabase => {
                this.setState({ allUsers: allUsersFromDatabase })
            })
            .catch(err => {
                alert("Erro Users -> componentDidMount ")
            })
    }

    handleDeleteUser = async id => {

        if( !window.confirm(`Deseja deletar ${id}`) )
            return

        try {
            const res = await this.props.database.deleteUser(id)

            if(res.status===200){
                const allUsersFromDatabase = await this.props.database.getAllUsers()
                this.setState({ allUsers: allUsersFromDatabase, inputSearch: '' })
                alert("Deletado")
            }
            else{
                alert("handleDeleteUser achou um erro")
                throw new Error('Erro em handleDeleteUser')
            }
        }
        catch(err){
            alert("Falha ao deletar")
        }
    }

    handleButtonSearch = async () => {
        const name = this.state.inputSearch

        await this.props.database.getUsersBy(name)
        .then(allUsersFromDatabase => {
            this.setState({ allUsers: allUsersFromDatabase })
        })
        .catch(err => {
            alert('Erro -> Users -> handleButtonSearch')
        })
    }

    onChangeInputSearch = e => this.setState({inputSearch: e.target.value})

    render(){
        return (
            <div className='Users'>
                <h2>Users</h2>
                <div>
                    <input 
                        value={this.state.inputSearch}
                        onChange={this.onChangeInputSearch}
                    />
                    <button
                        onClick={this.handleButtonSearch}
                    >Search</button>
                </div>
                {
                    this.state.allUsers.map &&
                    this.state.allUsers.map(user => {
                        return (
                            <User 
                                key={user.id}
                                user={user}
                                handleDeleteUser={this.handleDeleteUser} 
                                onClickShowDetails={this.props.onClickShowDetails}
                            />
                        );
                    })
                }
            </div>
        );
    }
}