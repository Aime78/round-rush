import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import Roundrush from '../../assets/Logo';
import { authStyle, authStyleChildren, authStyleTypo } from './authStyle';

interface AuthLayoutProps {
  isLastStep: boolean;
  description: string;
  children: ReactNode;
}

const AuthLayout = ({ isLastStep, description, children }: AuthLayoutProps) => {
  return (
    <Box sx={{ ...authStyle, height: `${isLastStep ? '100%' : '100vh'}` }}>
      <Box>
        <Roundrush />
      </Box>
      <Typography mt={2} sx={{ ...authStyleTypo }}>
        {description}
      </Typography>
      <Box sx={{ ...authStyleChildren }} mt={6}>
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
