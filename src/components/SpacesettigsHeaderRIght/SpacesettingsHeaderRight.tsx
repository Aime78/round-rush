import { Box } from '@mui/material';
import { AddIcon, NotificationIcon } from '../../assets/DashboardIcons';

export const SpacesettingsHeaderRight = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <NotificationIcon />
      <AddIcon />
    </Box>
  );
};
