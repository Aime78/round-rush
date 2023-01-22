import { Box } from '@mui/material';
import { NotificationIcon } from '../../assets/DashboardIcons';
import { AddIcon, CalendarIcon, RoundIcon, SlackIcon, UpgradeIcon } from '../../assets/ProjectheaderIcons';

export const ProjectheaderRight = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <RoundIcon />
      <SlackIcon />
      <CalendarIcon />
      <UpgradeIcon />
      <NotificationIcon />
      <AddIcon />
    </Box>
  );
};
