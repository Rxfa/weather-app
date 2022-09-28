import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      text: '#ffffff',
    },
    secondary: {
      light: '#75a7ff',
      main: '#2979ff',
      dark: '#004ecb',
      text: '#000000',
    },
  },
});

export default theme;
