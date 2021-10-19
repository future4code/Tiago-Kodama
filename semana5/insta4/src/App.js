import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

// styled: Main
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

// styled: Form to post
const FormContainer = styled.form`
  box-size: border-box;

  border: 2px solid gray;
  width: 300px;
  min-height: 200px;
  margin-bottom: 10px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

`
const FormInput = styled.input`
  width: 80%;
  height: 30px;
  align-items: center;
  padding: 0 10px;
  margin: 5px 0;
  text-align: center;

  background: white;
`
const FormButton = styled.button`
  width: 90%;
  height: 40px;
  align-items: center;
  padding: 0 10px;
  margin-top: 8px;
  margin-bottom: 15px;
  border-radius: 5px;

  color: white;
  font-weight: 700;
  background: #6495ED;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/149',
      },
      {
        nomeUsuario: 'roberta',
        fotoUsuario: 'https://picsum.photos/50/40',
        fotoPost: 'https://picsum.photos/200/139',
      },
      {
        nomeUsuario: 'carlota joaquina',
        fotoUsuario: 'https://picsum.photos/50/30',
        fotoPost: 'https://picsum.photos/200/120',
      }
    ],

      inputNomeUsuario: '',
      inputFotoUsuario: '',
      inputFotoPost: '',
  }

  onChangeInputNomeUsuario = event => {
    this.setState({ inputNomeUsuario: event.target.value })
  }
  onChangeInputFotoUsuario = event => {
    this.setState({ inputFotoUsuario: event.target.value })
  }
  onChangeInputFotoPost = event => {
    this.setState({ inputFotoPost: event.target.value })
  }
  onClickButtonForm = event => {
    event.preventDefault()

    const posts = this.state.posts
    const post = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost,
    }

    this.setState({posts: [post, ...posts]})
  }

  render() {
    return (
      <MainContainer>


        <FormContainer>
            <h2>Poste o que quiser</h2>
            <FormInput placeholder='Nome do usuário' onChange={this.onChangeInputNomeUsuario} />
            <FormInput placeholder='url da foto do usuario' onChange={this.onChangeInputFotoUsuario} />
            <FormInput placeholder='url da foto do post' onChange={this.onChangeInputFotoPost} />
            <FormButton onClick={this.onClickButtonForm}>Postar</FormButton>
        </FormContainer>


        {
          this.state.posts.map( (post, index) => {
            return (
              <Post
                nomeUsuario = {post.nomeUsuario}
                fotoUsuario = {post.fotoUsuario}
                fotoPost = {post.fotoPost}
                key={index}
              />
            );
          })
        }
      </MainContainer>
    );
  }
}

export default App;
