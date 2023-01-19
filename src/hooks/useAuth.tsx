import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../app/features/Auth/authSlice';
import { useAppDispatch, useAppSelector } from '../app/features/hooks';
import { userEmails, userPasswords } from '../data/companies';
import appRoutes from '../routes/routes';

type EmailPassword = {
  email: string;
  password: string;
};

export const useAuth = (emailPassword: EmailPassword) => {
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    const isEmailthere = userEmails.includes(emailPassword.email);
    const isPasswordthere = userPasswords.includes(emailPassword.password);
    if (isEmailthere && isPasswordthere) {
      dispatch(authUser(emailPassword));
      navigate(appRoutes.HOME);
      setErrorAlert(false);
    } else {
      setErrorAlert(true);
    }
  };

  return { handleLogin, errorAlert };
};
