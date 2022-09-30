import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const Footer = () => (
  <Box
    textAlign={'center'}
    sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
    }}>
    <IconButton
      variant={'outlined'}
      href={'https://github.com/Rxfa'}
    >
      <GitHubIcon
        size={'large'}
        color={'primary'}
      />
    </IconButton>
    <Typography
      variant={'subtitle2'}
      component={'h2'}
      color={'secondary'}
    >
          Made by Rxfa
    </Typography>
  </Box>
);

export default Footer;
