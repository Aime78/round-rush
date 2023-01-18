import { TextField, Typography, Button, Link, Box, Alert } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { styleFormInput, styleFormTitle } from '../../theme/customTheme';
import appRoutes from '../../routes/routes';

export const Login = () => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }} mb={2}>
        Login
      </Typography>
      <Alert sx={{ color: '#FD5461', background: '#F4F6FC' }} icon={<WarningAmberIcon fontSize="inherit" />} severity="error">
        Please make sure you have the correct email or password.
      </Alert>
      <TextField size="small" sx={{ ...styleFormInput }} label="Inserisci la tua email" />
      <TextField size="small" sx={{ ...styleFormInput }} label="Password" />
      <Button sx={{ width: '100%', margin: '10px 0' }} color="primary" variant="contained">
        Login
      </Button>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Link href={appRoutes.RESETPASSWORD} color="primary" underline="hover">
          I forgot my password
        </Link>
        <Link href={appRoutes.SIGNUP} color="primary" underline="hover">
          I don’t have an account
        </Link>
      </Box>
    </>
  );
};
