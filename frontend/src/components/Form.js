import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../themes/theme';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Form = ({formSubmit, inputChange, inputValue}) => (
  <ThemeProvider theme={theme}>
    <Box
      mt={3}
      bgcolor={'primary.light'}
      color={'primary.text'}
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'fit-content',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={formSubmit}>
        <TextField
          type="text"
          size='large'
          label="Search"
          name="query"
          variant="filled"
          InputLabelProps={{
            style: {
              fontSize: 25,
            },
          }}
          InputProps={{
            style: {
              fontSize: 25,
              height: 'fit-content',
              width: 'fit-content',
              fontWeight: 'lighter',
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  variant="outlined"
                  type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={inputValue}
          onChange={inputChange}
          autoFocus
        />
      </form>
    </Box>
  </ThemeProvider>
);

export default Form;
