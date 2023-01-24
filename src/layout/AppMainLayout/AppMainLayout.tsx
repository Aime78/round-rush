import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material';
import { useAppSelector } from '../../app/features/hooks';

const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppMain = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: '60px',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type AppMainLayoutProps = {
  children: ReactNode;
};
const AppMainLayout = ({ children }: AppMainLayoutProps) => {
  const { open } = useAppSelector((state) => state.drawer);
  return <AppMain open={open}>{children}</AppMain>;
};

export default AppMainLayout;
