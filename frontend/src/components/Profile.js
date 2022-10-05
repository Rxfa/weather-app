import 'font-awesome/css/font-awesome.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../themes/theme';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AirIcon from '@mui/icons-material/Air';
import iconSwitch from './WeatherIcon';


const Profile = ({src}) => (
  <ThemeProvider theme={theme}>
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
    >
      <Typography variant='h2' m={3} component='h2'>
        {src.name}
      </Typography>
      <img src={`https://countryflagsapi.com/png/${src.country}`}
        alt={`${src.country} flag`}
        width={'50px'}
      />
      <Grid
        container
        bgcolor={'primary.light'}
        color={'primary.text'}
        sx={{
          'width': 'fit-content',
          'border': '25px solid inherit',
          'borderRadius': '40px',
          'boxShadow': 10,
        }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        rowSpacing={4}
        columnSpacing={0}
        margin={'25px auto'}
      >
        <Grid xs={12}>
          <Typography variant='h4' component='h4'>
            <AccessTimeIcon />
          </Typography>
          <Typography mb={3} variant='h4' component='h4'>
            {
              `${
                new Date()
                    .toLocaleString('en-GB', {timeZone: src.timezone})
                    .slice(12, 17)
              }`
            }
          </Typography>
          {iconSwitch(src.today.weather_code)}
          <Typography mt={3} variant='h4' component='h4'>
          </Typography>
          <Typography variant='h2' component='h2'>
            {`${Math.round(src.today.temp)}`}{src.unit}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant='h4' component='h4'>
          MAX
          </Typography>
          <Typography variant='h3' component='h3'>
            {`${Math.round(src.today.max_temp)}${src.unit}`}
          </Typography>
        </Grid>
        <Grid xs>
          <Typography variant='h4' component='h4'>
          MIN
          </Typography>
          <Typography variant='h3' component='h3'>
            {`${Math.round(src.today.min_temp)}${src.unit}`}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant='h4' component={'h4'}>
            <AirIcon />
          </Typography>
          <Typography variant='h4' component='h4'>
            {`${src.today.wind_speed} km/h`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </ThemeProvider>
);

export default Profile;
