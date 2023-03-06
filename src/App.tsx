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
import ProjectPage from './pages/ProjectPage';
import SpaceSettingsInfoPage from './pages/SpaceSettingsInfoPage';
import SpaceSettingsMembersPage from './pages/SpaceSettingsMembersPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={appRoutes.DASHBOARD} element={<DashboardPage />} />
          <Route path={appRoutes.PROJECT} element={<ProjectPage />} />
          <Route path={appRoutes.SPACESETTINGSINFO} element={<SpaceSettingsInfoPage />} />
          <Route path={appRoutes.SPACESETTINGSMEMBERS} element={<SpaceSettingsMembersPage />} />
        </Route>
        <Route path={appRoutes.HOME} element={<LoginPage />} />
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
