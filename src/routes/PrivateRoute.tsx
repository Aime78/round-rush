import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/features/hooks';
import appRoutes from './routes';

const PrivateRoutes = () => {
  let auth = useAppSelector((state) => state.user.user);

  return auth.length === 0 ? <Navigate to={appRoutes.LOGIN} /> : <Outlet />;
};

export default PrivateRoutes;
