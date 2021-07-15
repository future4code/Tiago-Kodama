import React from 'react'
import styled from 'styled-components'


const FormContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const FormHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const FormFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

class FormAddPost extends React.Component {

  state = {
    nomeUsuario: '',
    fotoUsuario: '',
    fotoPost: '',
  }

  render() {


    return (
        <FormContainer>
            <FormHeader>
                <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
                <p>{this.props.nomeUsuario}</p>
            </FormHeader>
            <FormFooter>
                <p>Footer bacanal</p>
            </FormFooter>
        </FormContainer>
    );
  }
}

export default FormAddPost