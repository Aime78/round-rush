import { Box, Typography } from '@mui/material';
import { Conference } from '../../../assets/ProjectheaderIcons';

export const ProjectheaderLeft = () => {
  return (
    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ fontWeight: '400', fontSize: '24px' }}>
        Objectives
      </Typography>
      <Conference />
    </Box>
  );
};
