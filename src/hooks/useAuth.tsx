import { useEffect, useState } from 'react';
import { convertToObject } from 'typescript';
import { authUser } from '../app/features/Auth/authSlice';
import { useAppDispatch, useAppSelector } from '../app/features/hooks';

type EmailPassword = {
  email: string;
  password: string;
};

export const useAuth = (emailPassword: EmailPassword) => {
  const [errorAlert, setErrorAlert] = useState(false);

  const dispatch = useAppDispatch();
  //   const user = useAppSelector((state) => state.user);

  const handleLogin = () => {
    dispatch(authUser(emailPassword));
    // console.log('action has been dispatched.');

    // if (user.loading === false && user.user.length !== 0) {
    //   console.log('user has submitted the right credentials');
    // }

    // console.log('inside:', user);
  };

  //   const checkLogin = () => {
  //     console.log('checkLogin: ', user);
  //   };
  //   checkLogin();

  //   useEffect(() => {
  //     if (user.user.length === 0) {
  //       console.log('userLength is true:', user);
  //     } else {
  //       console.log('userLength is false:', user);
  //     }
  //   }, [user]);
  //   console.log('outside:', user);

  return { handleLogin };
};
