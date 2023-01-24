import { Box, Typography } from '@mui/material';
import { ProductivityIcon } from '../../../assets/DashboardIcons';
import { projects } from '../../../assets/DashboardIcons';

export const BoardProjects = () => {
  return (
    <Box component="main" sx={{ padding: '60px 30px 0 50px', width: '60%' }}>
      {/* Welcome container */}
      <Box sx={{ height: '170px', display: 'flex', padding: '20px', background: '#E8F0FE', position: 'relative', borderRadius: '8px' }}>
        <Box sx={{ width: '60%' }}>
          <Typography variant="h6" sx={{ fontWeight: '400', fontSize: '24px', letterSpacing: '0.2px' }} mb={2}>
            Welcome back, James
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '14px', color: '#31394E', marginRight: '30px' }}>
            in <span style={{ fontWeight: 'bold' }}>Marketing</span> You have <span style={{ fontWeight: 'bold' }}>14</span> task to accomplish and <span style={{ fontWeight: 'bold' }}>10</span>{' '}
            reviews left in your current iteration.
          </Typography>
        </Box>
        <Box sx={{ position: 'absolute', top: '-25px', right: '40px' }}>
          <ProductivityIcon />
        </Box>
      </Box>
      {/* Projects container */}
      <Box>
        <Typography sx={{ fontSize: '20px', color: '#31394E', fontWeight: '400', padding: '40px 0px' }}>Favorite Projects</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '50px', marginLeft: '15px' }}>
          {projects.map((project) => (
            <Box>{project}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
