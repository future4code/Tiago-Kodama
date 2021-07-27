import React from 'react';
import SignUp from './Componets/SignUp';
import Users from './Componets/Users';
import './App.css';

class App extends React.Component {

  state = {
    page: 'SignUp'
  }

  onClickButtonChangePage = pageName => {
    this.setState({ page: pageName })
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Labenusers</h1>
          <nav>
            <div>
              <button onClick={() => this.onClickButtonChangePage('SignUp')}>Sign up</button>
              <button onClick={() => this.onClickButtonChangePage('Users')}>Users</button>
            </div>
          </nav>
        </header>
  
        <main>
          {
            this.state.page==='SignUp' ?
              <SignUp /> :
              <Users />
          }
        </main>
  
      </div>
    );
  }
}

export default App;
