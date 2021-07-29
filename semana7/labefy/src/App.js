import React from 'react';
import './App.css';
import Menu from './Componets/Menu';
import Panel from './Componets/Panel';
import Player from './Componets/Player';

class App extends React.Component {

  state = {
    currentScreen: 'screenplaylist'
  }

  changeScreen = screen => this.setState({currentScreen: screen})

  render(){
    return (
      <div className="App">
        <Menu 
          changeScreen={this.changeScreen}
        />
        <Panel 
          selectedScreen={this.state.currentScreen}
        />
        <Player />
      </div>
    );
  }
}

export default App;
