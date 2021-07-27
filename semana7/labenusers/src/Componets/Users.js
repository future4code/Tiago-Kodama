import React from 'react'
import User from './User';

export default class Users extends React.Component{

    state = {
        allUsers: []
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
        try {
            const res = await this.props.database.deleteUser(id)

            if(res.status===200){
                const allUsersFromDatabase = await this.props.database.getAllUsers()
                this.setState({ allUsers: allUsersFromDatabase })
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

    render(){
        return (
            <div className='Users'>
                <h2>Users</h2>
                {
                    this.state.allUsers.map &&
                    this.state.allUsers.map(user => {
                        return (
                            <User 
                            key={user.id}
                            user={user}
                            handleDeleteUser={this.handleDeleteUser} 
                            />
                        );
                    })
                }
            </div>
        );
    }
}