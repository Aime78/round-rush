import EmailForm from '../components/EmailForm';
import { Button } from '@mui/material';
const SignupPage = () => {
  return (
    <div>
      <EmailForm />
      <Button variant="contained">Next</Button>
    </div>
  );
};

export default SignupPage;
