import { Box, Typography } from '@mui/material';
import { SpacesettingsIcon } from '../../assets/SpacesettingsIcon';

export const SpaceSettings = () => {
  return (
    <Box sx={{ padding: '60px 30px 0 50px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <SpacesettingsIcon />
        <Typography sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#4C84FF' }}>SPACE SETTINGS</Typography>
      </Box>
      <Box ml={3}>
        <Typography sx={{ padding: '20px 0', fontSize: '14px', fontWeight: '400', color: '#4C84FF' }}>Info</Typography>
        <Typography sx={{ padding: '10px 0', fontSize: '14px', fontWeight: '400', color: '#838895' }}>Members</Typography>
      </Box>
    </Box>
  );
};
