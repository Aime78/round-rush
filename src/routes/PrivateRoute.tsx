import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/features/hooks';

import appRoutes from './routes';

const PrivateRoutes = () => {
  let authUser = useAppSelector((state) => state.user.user);

  if (authUser.authenticated) localStorage.setItem('user', authUser.email);
  const user = localStorage.getItem('user');

  return user ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />;
};

export default PrivateRoutes;
