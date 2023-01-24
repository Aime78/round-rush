import Emailexists from '../components/Authentication/Emailexists';
import AuthLayout from '../layout/AuthLayout/AuthLayout';

const EmailexistsPage = () => {
  return (
    <AuthLayout description="signing up a new account">
      <Emailexists />
    </AuthLayout>
  );
};

export default EmailexistsPage;
