import { useState } from 'react';
import EmailForm from '../components/EmailForm';
import { Button, Box } from '@mui/material';
import NamePasswordForm from '../components/NamePasswordForm';
import CompanyInfoForm from '../components/CompanyInfoForm';
import { useMultistepForm } from '../hooks/useMultistepForm';
import { USER_INITIAL_DATA } from '../constants/USER_INITIAL_DATA';
import { UserDataInterface } from '../types/userDataInterface';

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
    <div>
      {step}
      <Box>
        {isLastStep ? (
          <Button variant="contained" onClick={() => console.log(data)}>
            Register
          </Button>
        ) : (
          <Button variant="contained" onClick={next}>
            Next
          </Button>
        )}
      </Box>
    </div>
  );
};

export default SignupPage;
