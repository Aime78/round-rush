import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../app/features/Auth/authSlice';
import { useAppDispatch } from '../app/features/hooks';
import appRoutes from '../routes/routes';
import signIn from '../services/signIn';

type EmailPassword = {
  email: string;
  password: string;
};

export const useAuth = (emailPassword: EmailPassword) => {
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { email, password } = emailPassword;

  const handleLogin = async () => {
    const userCredential = (await signIn(email, password)) as any;

    if (userCredential.user) {
      dispatch(authUser(emailPassword));
      navigate(appRoutes.DASHBOARD);
      setErrorAlert(false);
    } else {
      setErrorAlert(true);
    }
  };

  return { handleLogin, errorAlert };
};
