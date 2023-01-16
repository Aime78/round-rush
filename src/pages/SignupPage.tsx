import { useState } from 'react';
import EmailForm from '../components/EmailForm';
import { Button, Box } from '@mui/material';
import NamePasswordForm from '../components/NamePasswordForm';
import CompanyInfoForm from '../components/CompanyInfoForm';
import { useMultistepForm } from '../hooks/useMultistepForm';
import { USER_INITIAL_DATA } from '../constants/USER_INITIAL_DATA';
import { UserDataInterface } from '../types/userDataInterface';
import AuthLayout from '../layout/AuthLayout/AuthLayout';

const SignupPage = () => {
  const [data, setData] = useState(USER_INITIAL_DATA);
  const updateFields = (fields: Partial<UserDataInterface>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const { step, next, isLastStep } = useMultistepForm([
    <EmailForm {...data} updateFields={updateFields} />,
    <NamePasswordForm {...data} updateFields={updateFields} />,
    <CompanyInfoForm {...data} updateFields={updateFields} />,
  ]);

  return (
    <AuthLayout isLastStep={isLastStep} description="signing up a new account">
      {step}
      <Box sx={{ width: '100%' }} mt={2}>
        {isLastStep ? (
          <Button variant="contained" onClick={() => console.log(data)} sx={{ width: '100%', background: '#29C293' }}>
            Register
          </Button>
        ) : (
          <Button color="primary" variant="contained" onClick={next} sx={{ width: '100%' }}>
            Next
          </Button>
        )}
      </Box>
    </AuthLayout>
  );
};

export default SignupPage;
