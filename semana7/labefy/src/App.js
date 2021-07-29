import React from 'react';
import Axios from 'axios'
import './App.css';
import Menu from './Componets/Menu';
import Panel from './Componets/Panel';
import Player from './Componets/Player';

class App extends React.Component {

  state = {
    currentScreen: 'screenallmusics',
    playlists: [],
    currentPlaylist: {}
  }

  componentDidMount(){
    this.getPlaylistsDatabase()
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    // TESTES
  }


  changeScreen = screen => this.setState({currentScreen: screen})

  getPlaylistsDatabase = async () => {

    try{
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
      const headers = { Authorization: "tiago-kodama-lovelace" }

      const res = await Axios.get(url, { headers })
      
      if( res.status === 200 ){
        this.setState({ playlists: res.data.result.list })
      }
    }

    catch(err){
      console.log(err.response.data)
    }
  }

  updatePlaylists = async newplaylist => {
    const newPlaylists = [...newplaylist]
    await this.setState({ playlists: newPlaylists })
  }

  setPlaylist = playlist => {
    const choosenPlaylist = {...playlist}
    this.setState({currentPlaylist: choosenPlaylist})
  }

  render(){
    return (
      <div className="App">
        <Menu 
          changeScreen={this.changeScreen}
          playlists={this.state.playlists}
          setPlaylist={this.setPlaylist}
          updatePlaylists={this.updatePlaylists}
        />
        <Panel 
          selectedScreen={this.state.currentScreen}
          updatePlaylists={this.updatePlaylists}
          playlist={this.state.currentPlaylist}
        />
        <Player />
      </div>
    );
  }
}

export default App;
