import React from 'react'

export default class User extends React.Component{

    onClickShowDetails = async user => {
        await this.props.onClickShowDetails(user)
    }

    render(){
        const user = this.props.user

        return(
            <div>
                <p>{user.name}</p>
                <button onClick={() => this.props.handleDeleteUser(user.id)}>Del</button>
                <button onClick={() => this.onClickShowDetails(user)} >Details</button>
            </div>
        )
    }
}