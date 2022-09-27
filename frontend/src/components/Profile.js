import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

const d = new Date();
const getLocalTZ = d.getTime() + (d.getTimezoneOffset() * 60000);
;

const Profile = ({src}) => (
  <Box
    justifyContent={'center'}
    alignItems={'center'}
    textAlign={'center'}
  >
    <Typography variant='h2' component='h2'>
      {src.name}
    </Typography>
    <img src={`https://countryflagsapi.com/png/${src.country}`}
      alt={`${src.country} flag`}
      width={'25px'}
    />
    <Grid
      container
      sx={{
        'backgroundColor': '#0336FF',
        'width': 'fit-content',
        'border': '25px solid white',
        'borderRadius': '40px',
      }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      rowSpacing={4}
      columnSpacing={0}
      margin={'auto'}
    >
      <Grid xs={12}>
        <Typography variant='h4' component='h4'>
          time
        </Typography>
        <Typography variant='h4' component='h4'>
          {
            `${
              new Date()
                  .toLocaleString('en-GB', {timeZone: src.timezone})
                  .slice(12, 17)
            }`
          }
        </Typography>
        <Typography variant='h3' component='h3'>
          temp
        </Typography>
        <Typography variant='h3' component='h3'>
          {`${src.today.temp}`}{src.unit}
        </Typography>
      </Grid>
      <Grid xs={6}>
        <Typography variant='h3' component='h3'>
          max
        </Typography>
        <Typography variant='h3' component='h3'>
          {`${Math.round(src.today.max_temp)}${src.unit}`}
        </Typography>
      </Grid>
      <Grid xs>
        <Typography variant='h3' component='h3'>
          min
        </Typography>
        <Typography variant='h3' component='h3'>
          {`${Math.round(src.today.min_temp)}${src.unit}`}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant='h4' component='h4'>
          {`wind speed ${src.today.wind_speed} kmh`}
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Profile;
