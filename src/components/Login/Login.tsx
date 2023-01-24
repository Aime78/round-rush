import { useState } from 'react';
import { TextField, Typography, Button, Link, Box, Alert } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { buttonStyle, styleFormInput, styleFormTitle } from '../../theme/customTheme';
import appRoutes from '../../routes/routes';
import { useAuth } from '../../hooks/useAuth';

const LoginData = {
  email: '',
  password: '',
};
export const Login = () => {
  const [userData, setUserData] = useState(LoginData);
  const { handleLogin, errorAlert } = useAuth(userData);

  return (
    <>
      <Typography sx={{ ...styleFormTitle }} mb={2}>
        Login
      </Typography>

      {errorAlert && (
        <Alert sx={{ color: '#FD5461', background: '#F4F6FC', margin: '15px 0px' }} icon={<WarningAmberIcon fontSize="inherit" />} severity="error">
          Please make sure you have the correct email or password.
        </Alert>
      )}

      <TextField size="small" sx={{ ...styleFormInput }} type="email" label="Inserisci la tua email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      <TextField size="small" sx={{ ...styleFormInput }} type="password" label="Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      <Button sx={{ ...buttonStyle, width: '100%' }} color="primary" variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Box mt={2} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
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
