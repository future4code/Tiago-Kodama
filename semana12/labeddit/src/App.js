import Router from './routers/Router'
import theme from './constants/themes'
import { ThemeProvider } from '@material-ui/core/styles'
import GlobalState from './global/GlobalStates'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
