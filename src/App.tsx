import { ThemeProvider } from '@mui/material';
import { theme } from './theme/customTheme';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import appRoutes from './routes/routes';
import EmailexistsPage from './pages/EmailexitsPage';
import EmailVerifiedPage from './pages/EmailVerifiedPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PrivateRoutes from './routes/PrivateRoute';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={appRoutes.HOME} element={<h1>Welcome to our app</h1>} />
        </Route>
        <Route path={appRoutes.DASHBOARD} element={<DashboardPage />} />
        <Route path={appRoutes.LOGIN} element={<LoginPage />} />
        <Route path={appRoutes.RESETPASSWORD} element={<ResetPasswordPage />} />
        <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
        <Route path={appRoutes.EMAILVERIFICATION} element={<EmailVerifiedPage />} />
        <Route path={appRoutes.EMAILEXIST} element={<EmailexistsPage />} />
        <Route path={appRoutes.UNKNOWN} element={<h1>404 Page not found</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
