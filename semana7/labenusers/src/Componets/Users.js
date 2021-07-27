import React from 'react'
import User from './User';

export default class Users extends React.Component{

    state = {
        allUsers: [
            {
                name: 'tiago',
                email: 'email@email'
            },
            {
                name: 'tiago',
                email: 'email@email'
            }
        ]
    }

    render(){
        return (
            <div className='Users'>
                <h2>Users</h2>
                {
                    this.state.allUsers.map(user => {
                        return (
                            <User user={user} />
                        );
                    })
                }
            </div>
        );
    }
}