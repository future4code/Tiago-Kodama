import React from 'react';
import Axios from 'axios'
import './App.css';
import Menu from './Componets/Menu';
import Panel from './Componets/Panel';
import Player from './Componets/Player';

class App extends React.Component {

  state = {
    currentScreen: 'screenplaylist',
    playlists: []
  }

  componentDidMount(){
    this.getPlaylistsDatabase()
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

  updatePlaylists = async newplaylists => {
    await this.setState({ playlists: newplaylists })
  }

  render(){
    return (
      <div className="App">
        <Menu 
          changeScreen={this.changeScreen}
          playlists={this.state.playlists}
        />
        <Panel 
          selectedScreen={this.state.currentScreen}
          updatePlaylists={this.updatePlaylists}
          playlists={this.state.playlists}
        />
        <Player />
      </div>
    );
  }
}

export default App;
