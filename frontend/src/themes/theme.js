import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
    },
    secondary: {
      main: '#2979ff',
      light: '#75a7ff',
      dark: '#004ecb',
    },
  },
});

export default theme;
