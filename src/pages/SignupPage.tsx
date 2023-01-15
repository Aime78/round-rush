import EmailForm from '../components/EmailForm';
import { Button } from '@mui/material';
import NamePasswordForm from '../components/NamePasswordForm';
import CompanyInfoForm from '../components/CompanyInfoForm';
const SignupPage = () => {
  return (
    <div>
      <EmailForm />
      <NamePasswordForm />
      <CompanyInfoForm />
      <Button variant="contained">Next</Button>
    </div>
  );
};

export default SignupPage;
