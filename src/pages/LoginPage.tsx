import Login from '../components/Authentication/Login';
import AuthLayout from '../layout/AuthLayout/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout
      description="the optimized workflow
    out of the box"
    >
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
