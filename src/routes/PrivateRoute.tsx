import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/features/hooks';
import appRoutes from './routes';

const PrivateRoutes = () => {
  let authUser = useAppSelector((state) => state.user.user);

  return authUser.authenticated ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />;
};

export default PrivateRoutes;
