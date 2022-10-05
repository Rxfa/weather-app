import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../themes/theme';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import Box from '@mui/material/Box';


const Form = ({formSubmit, inputChange, inputValue}) => (
  <ThemeProvider theme={theme}>

    <Box
      mt={3}
      bgcolor={'primary.light'}
      color={'primary.text'}
      sx={{
        alignItems: 'center',
        width: 'fit-content',
      }}
    >
      <form onSubmit={formSubmit}>
        <TextField
          type="text"
          size='large'
          label="Search"
          name="query"
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  variant="outlined"
                  size="large"
                  type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    </Box>
  </ThemeProvider>
);

export default Form;
