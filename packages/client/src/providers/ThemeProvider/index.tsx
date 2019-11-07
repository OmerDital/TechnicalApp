import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#512da8'
    },
    secondary: {
      main: '#ef5350'
    },
    background: { default: '#f4f6f8' }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  direction: 'rtl'
});

export default theme;
