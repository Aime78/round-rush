import { ThemeProvider } from '@mui/material';
import { theme } from './theme/customTheme';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import appRoutes from './routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={appRoutes.HOME} element={<h1>Welcome to our app</h1>} />
        <Route path={appRoutes.LOGIN} element={<LoginPage />} />
        <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
        <Route path={appRoutes.UNKNOWN} element={<h1>404 Page not found</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
