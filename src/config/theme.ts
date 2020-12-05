import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  overrides: {
    MuiToolbar: {
      gutters: {
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#00bcd4',
        color: '#fff',
      },
    },
  },
  palette: {
    primary: {
      main: '#00bcd4',
    },
  },
});
