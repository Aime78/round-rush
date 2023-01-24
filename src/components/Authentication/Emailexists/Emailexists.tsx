import { Button, Link, Typography } from '@mui/material';
import appRoutes from '../../../routes/routes';
import { styleFormDescription, styleFormTitle } from '../../../theme/customTheme';

export const Emailexists = () => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }}>Sign Up</Typography>
      <Typography sx={{ ...styleFormDescription, textAlign: 'center' }} mt={4}>
        Your email it's already an account in Roundrush
      </Typography>
      <Link href={appRoutes.LOGIN} mt={4}>
        <Button variant="contained" sx={{ padding: '10px 50px', textTransform: 'lowercase' }}>
          Click here to authentication
        </Button>
      </Link>
    </>
  );
};
