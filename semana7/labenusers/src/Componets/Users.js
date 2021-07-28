import React from 'react'
import User from './User';
import Styled from 'styled-components'

import ImageSearch from './Images/lupa-icon.svg'

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
`
const ContainerUsers = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    div {
        margin: .4rem 0;
    }
`
const ContainerSearch = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    width: 80%;
    height: 2rem;
    margin-bottom: 2rem;

    input,
    button {
        border: none;
        height: 100%;
        background: transparent;
    }

    input {
        width: 80%;
        padding-left: 2rem;
    }
    input:focus
    {
        border: none;
        outline-offset: 0px;
        outline: none;
    }

    button {
        width: 8%;
        text-align: center;
    }
`

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
            <Container className='Users'>
                <h2>Users</h2>

                <ContainerSearch>
                    <input 
                        value={this.state.inputSearch}
                        onChange={this.onChangeInputSearch}
                    />
                    <button
                        onClick={this.handleButtonSearch}
                    >
                        <img src={ImageSearch} alt='search-icon' />
                    </button>
                </ContainerSearch>

                <ContainerUsers>
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
                </ContainerUsers>

            </Container>
        );
    }
}