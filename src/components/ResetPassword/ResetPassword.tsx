import { Typography, TextField } from '@mui/material';
import { styleFormDescription, styleFormInput, styleFormTitle } from '../../theme/customTheme';
export const ResetPassword = () => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }} mb={2}>
        Forgot your password
      </Typography>
      <Typography sx={{ ...styleFormDescription }} mb={4}>
        Enter you details below
      </Typography>

      <TextField size="small" sx={{ ...styleFormInput }} label="Insert your email" />
    </>
  );
};
