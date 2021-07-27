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

    render(){
        return (
            <div className='Users'>
                <h2>Users</h2>
                {
                    this.state.allUsers.map &&
                    this.state.allUsers.map(user => {
                        return (
                            <User user={user} key={user.id}/>
                        );
                    })
                }
            </div>
        );
    }
}