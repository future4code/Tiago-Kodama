import Router from './routers/Router'
import theme from './constants/themes'
import { ThemeProvider } from '@material-ui/core/styles'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
