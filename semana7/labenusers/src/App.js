import React from 'react';
import SignUp from './Componets/SignUp';
import Users from './Componets/Users';
import Database from './Tools/database';
import Details from './Componets/Details';


import './App.css';


class App extends React.Component {

  state = {
    page: 'SignUp',
    selectedUser: undefined 
  }

  database = new Database()

  onClickButtonChangePage = pageName => {
    this.setState({ page: pageName })
  }

  onClickShowDetails = async user => {
    await this.setState({ selectedUser: user, page: 'Details' })
  }

  showPage = () => {
    const page = this.state.page

    switch (page) {
      case 'SignUp':
        return <SignUp 
                database={this.database}
                />
      
      case 'Users':
        return <Users 
                database={this.database}
                onClickShowDetails={this.onClickShowDetails}
                />

      case 'Details':
        return <Details
                database={this.database}
                user={this.state.selectedUser}  
              />

      default:
        return <p>Não achei nadinha</p>
    }
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
          <this.showPage />
        </main>
  
      </div>
    );
  }
}

export default App;
