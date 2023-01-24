import { Typography, TextField } from '@mui/material';
import { styleFormDescription, styleFormInput, styleFormTitle } from '../../../theme/customTheme';

export const ResetPasswordNewPass = () => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }} mb={2}>
        Forgot your password
      </Typography>
      <Typography sx={{ ...styleFormDescription }} mb={4}>
        Please enter your new password
      </Typography>

      <TextField size="small" sx={{ ...styleFormInput }} type="password" label="Password" />
    </>
  );
};
