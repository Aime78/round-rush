import { Typography, TextField, Alert } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styleFormDescription, styleFormInput, styleFormTitle } from '../../theme/customTheme';

export const ResetPasswordSuccess = () => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }} mb={2}>
        Forgot your password
      </Typography>
      <Typography sx={{ ...styleFormDescription }} mb={4}>
        Enter you details below
      </Typography>
      <Alert sx={{ color: '#29C293', background: '#F4F6FC', margin: '0 0 15px 0' }} icon={<CheckCircleOutlineIcon fontSize="inherit" />} severity="success">
        Well done, we'll email you with a reset link.
      </Alert>
      <TextField size="small" sx={{ ...styleFormInput }} label="Insert your email" />
    </>
  );
};
