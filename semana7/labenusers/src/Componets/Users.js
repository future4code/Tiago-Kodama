import React from 'react'

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
            <p>Users</p>
        );
    }
}