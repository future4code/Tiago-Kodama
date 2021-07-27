import React from 'react';
import SignUp from './Componets/SignUp';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header>
          <h1>Labenusers</h1>
          <nav>
            <div>
              <button>Sign up</button>
              <button>Users</button>
            </div>
          </nav>
        </header>
  
        <main>
          <SignUp />
          <p>Users </p>
        </main>
  
      </div>
    );
  }
}

export default App;
