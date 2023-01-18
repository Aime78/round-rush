import { Button, Link } from '@mui/material';
import ResetPassword from '../components/ResetPassword';
import ResetPasswordNewPass from '../components/ResetPasswordNewPass';
import { ResetPasswordSuccess } from '../components/ResetPasswordSucess/ResetPasswordSuccess';
import { useMultistepForm } from '../hooks/useMultistepForm';
import AuthLayout from '../layout/AuthLayout/AuthLayout';
import { buttonStyle } from '../theme/customTheme';
import appRoutes from '../routes/routes';

const ResetPasswordPage = () => {
  const { step, next, currentStepIndex, isLastStep } = useMultistepForm([<ResetPassword />, <ResetPasswordSuccess />, <ResetPasswordNewPass />]);

  return (
    <AuthLayout
      description="the optimized workflow
    out of the box"
    >
      {step}
      <Button sx={{ ...buttonStyle, width: '100%', margin: '10px 0' }} variant="contained" onClick={next}>
        {currentStepIndex === 1 ? 'Done' : 'Recover your password'}
      </Button>
      {isLastStep ? null : (
        <Link href={appRoutes.LOGIN} underline="hover">
          Back to login
        </Link>
      )}
    </AuthLayout>
  );
};

export default ResetPasswordPage;