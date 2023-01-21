import { Box } from '@mui/material';
import { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return <Box>{children}</Box>;
};

export default AppLayout;
