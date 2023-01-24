import EmailVerification from '../components/Authentication/Emailverification';
import AuthLayout from '../layout/AuthLayout/AuthLayout';

const EmailVerifiedPage = () => {
  return (
    <AuthLayout description="signing up new account">
      <EmailVerification />
    </AuthLayout>
  );
};

export default EmailVerifiedPage;
