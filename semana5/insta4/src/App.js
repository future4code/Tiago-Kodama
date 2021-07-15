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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/149'}
        />

        <Post
          nomeUsuario={'roberta'}
          fotoUsuario={'https://picsum.photos/50/40'}
          fotoPost={'https://picsum.photos/200/139'}
        />

        <Post
          nomeUsuario={'carlota joaquina'}
          fotoUsuario={'https://picsum.photos/50/30'}
          fotoPost={'https://picsum.photos/200/120'}
        />
      </MainContainer>
    );
  }
}

export default App;
