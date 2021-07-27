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

    render(){
        return (
            <div className='Details'>
                <p>Name {this.state.name}</p>
                <p>Email {this.state.email}</p>
                <p>ID {this.state.id}</p>
            </div>
        );
    }
}