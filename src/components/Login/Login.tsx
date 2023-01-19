import { useEffect, useState } from 'react';
import { authUser } from '../../app/features/Auth/authSlice';
import { TextField, Typography, Button, Link, Box, Alert } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { styleFormInput, styleFormTitle } from '../../theme/customTheme';
import appRoutes from '../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../app/features/hooks';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const LoginData = {
  email: '',
  password: '',
};
export const Login = () => {
  const [userData, setUserData] = useState(LoginData);
  // const { handleLogin } = useAuth(userData);

  // const [errorAlert, setErrorAlert] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  console.log(user);
  // console.log(user);
  // const navigate = useNavigate();

  // const handleLogin = async () => {
  //   // console.log(userData);
  //   await dispatch(authUser(userData));

  //   // if (user) {
  //   //   navigate(appRoutes.HOME);
  //   // } else {
  //   //   setErrorAlert(true);
  //   // }
  // };
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  return (
    <>
      <Typography sx={{ ...styleFormTitle }} mb={2}>
        Login
      </Typography>

      {/* {errorAlert && (
        <Alert sx={{ color: '#FD5461', background: '#F4F6FC' }} icon={<WarningAmberIcon fontSize="inherit" />} severity="error">
          Please make sure you have the correct email or password.
        </Alert>
      )} */}

      <TextField size="small" sx={{ ...styleFormInput }} type="email" label="Inserisci la tua email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      <TextField size="small" sx={{ ...styleFormInput }} type="password" label="Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      <Button sx={{ width: '100%', margin: '10px 0' }} color="primary" variant="contained" onClick={() => dispatch(authUser(userData))}>
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
