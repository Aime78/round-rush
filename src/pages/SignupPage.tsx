import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import EmailForm from '../components/EmailForm';
import { Button, Box } from '@mui/material';
import NamePasswordForm from '../components/NamePasswordForm';
import CompanyInfoForm from '../components/CompanyInfoForm';
import { useMultistepForm } from '../hooks/useMultistepForm';
import { USER_INITIAL_DATA } from '../constants/USER_INITIAL_DATA';
import { UserDataInterface } from '../types/userDataInterface';
import { companiesEmails, companiesNames } from '../data/companies';
import AuthLayout from '../layout/AuthLayout/AuthLayout';
import { signUpcompany } from '../services/signUpcompany';
import appRoutes from '../routes/routes';

const SignupPage = () => {
  const [data, setData] = useState(USER_INITIAL_DATA);
  const [doescompanyExist, setDoescompanyExist] = useState(false);
  const navigate = useNavigate();

  const updateFields = (fields: Partial<UserDataInterface>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const checkCompanyEmail = () => {
    const isCompanyEmailthere = companiesEmails.includes(data.email);
    if (isCompanyEmailthere) {
      navigate(appRoutes.EMAILEXIST);
    }
  };

  const signUp = async () => {
    const isCompanythere = companiesNames.includes(data.spaceName);
    if (isCompanythere) {
      setDoescompanyExist(true);
      return;
    }
    const response = (await signUpcompany(data)) as any;
    if (response.status === 201) {
      navigate(appRoutes.EMAILVERIFICATION);
    } else {
      navigate(appRoutes.SIGNUP);
    }
  };

  const { step, next, isLastStep } = useMultistepForm([
    <EmailForm {...data} updateFields={updateFields} />,
    <NamePasswordForm {...data} updateFields={updateFields} />,
    <CompanyInfoForm {...data} doescompanyExist={doescompanyExist} updateFields={updateFields} />,
  ]);

  return (
    <AuthLayout isLastStep={isLastStep} description="signing up a new account">
      {step}
      <Box sx={{ width: '100%' }} mt={2}>
        {isLastStep ? (
          <Button variant="contained" onClick={signUp} sx={{ width: '100%', background: '#29C293' }}>
            Register
          </Button>
        ) : (
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              checkCompanyEmail();
              next();
            }}
            sx={{ width: '100%' }}
          >
            Next
          </Button>
        )}
      </Box>
      <Outlet />
    </AuthLayout>
  );
};

export default SignupPage;
