import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, amber } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: amber[200],
      light: amber.A300,
      dark: amber[800]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  },
  props: {
    MuiWithWidth: {
      initialWidth: 'lg'
    }
  }
});