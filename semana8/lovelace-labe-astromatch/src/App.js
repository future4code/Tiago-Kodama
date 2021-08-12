import { useEffect, useState } from 'react';
import Styled from 'styled-components'

import Header from './componets/Header/index'
import Profiles from './pages/Profiles/index';
import Matches from './pages/Matches/index';
import Clean from './pages/Clean/index';
import SendMessages from './pages/SendMessages/index';

function App() {
  const [currentPage, setCurrentPage] = useState('profiles')

  useEffect(() => {
    console.log(currentPage)
  },[currentPage])

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'profiles':
        return <Profiles />
      
      case 'matches':
        return <Matches setCurrentPage={setCurrentPage}/>

      case 'clean':
        return <Clean />
    
      case 'sendmessages':
        return <SendMessages />

      default:
        return <Profiles />
    }
  }

  return (
    <AppContainer>
      <Header setCurrentPage={setCurrentPage}/>
      {renderCurrentPage()}
    </AppContainer>
  );
}

export default App;

const AppContainer = Styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`