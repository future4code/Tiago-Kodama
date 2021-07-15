import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    ]
  }

  render() {
    return (
      <MainContainer>
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
