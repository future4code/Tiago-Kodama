import React from 'react'

export default class User extends React.Component{
    render(){
        const user = this.props.user

        return(
            <div>
                <p>{user.name}</p>
                <button onClick={() => this.props.handleDeleteUser(this.props.user.id)}>Del</button>
            </div>
        )
    }
}