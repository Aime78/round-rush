import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const NamePasswordForm = () => {
  return (
    <Box>
      <Typography>SignUp</Typography>
      <Typography>Fill up your account information</Typography>
      <TextField label="Insert your full name" />
      <TextField label="Choose your password" type="password" autoComplete="false" />
    </Box>
  );
};
