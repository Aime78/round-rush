import { Box } from '@mui/material';
import { AddIcon, NotificationIcon } from '../../../assets/DashboardIcons';

export const DashboardHeaderRight = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <NotificationIcon />
      <AddIcon />
    </Box>
  );
};
