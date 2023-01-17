import { Typography, Link, Box } from '@mui/material';
import { Emailbox } from '../../assets/Emailbox';
import appRoutes from '../../routes/routes';
import { styleFormDescription, styleFormTitle } from '../../theme/customTheme';

export const EmailVerification = () => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }}> Your account is ready !</Typography>
      <Box mt={8}>
        <Emailbox />
      </Box>
      <Typography sx={{ ...styleFormDescription, fontSize: '17px', textAlign: 'center' }} mt={6}>
        Please verify your email and continue to Roundrush
      </Typography>
      <Link href={appRoutes.LOGIN} color="primary" underline="hover" mt={8}>
        Go to login page
      </Link>
    </>
  );
};
