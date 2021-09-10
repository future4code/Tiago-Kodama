import { createTheme } from '@material-ui/core/styles';
import { primaryColor, neutralColor } from './colors'

const theme = createTheme({
  palette: {
    primary: primaryColor,
    secondary: neutralColor,
  }
});

export default theme