import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const Footer = () => (
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
      <GitHubIcon
        color={'primary'}
      />
    </IconButton>
    <Typography
      variant={'subtitle1'}
      component={'h2'}
      color={'primary'}
    >
          Made by Rxfa
    </Typography>
  </Box>
);

export default Footer;
