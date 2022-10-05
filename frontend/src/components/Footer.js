import ThemeProvider from '@mui/material/styles/ThemeProvider';

import theme from '../themes/theme';

import Box from '@mui/system/Box';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => (
  <ThemeProvider theme={theme}>
    <Box
      textAlign={'center'}
      sx={{
        height: 'fit-content',
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}>
      <IconButton
        variant={'outlined'}
        href={'https://github.com/rxfa'}
      >
        <GitHubIcon />
      </IconButton>
      <Typography
        variant={'subtitle1'}
        component={'h2'}
        color={'primary.text'}
      >
          Made by Rxfa
      </Typography>
    </Box>
  </ThemeProvider>
);

export default Footer;
