import { useState } from 'react';
import { Box, Divider } from '@mui/material';
import NavDrawer from '../components/NavDrawer';
import AppLayout from '../layout/AppLayout/AppLayout';
import AppHeaderLayout from '../layout/AppHeaderLayout/AppHeaderLayout';
import ProjectheaderLeft from '../components/ProjectheaderLeft';
import ProjectheaderRight from '../components/ProjectheaderRight';
import AppMainLayout from '../layout/AppMainLayout/AppMainLayout';
import Objectives from '../components/Objectives';

const ProjectPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppLayout>
      <NavDrawer open={open} setOpen={setOpen} />
      <Box>
        <Box sx={{ padding: '20px 50px 0 50px' }}>
          <AppHeaderLayout leftContainer={<ProjectheaderLeft />} rightContainer={<ProjectheaderRight />} open={open} />
        </Box>
        <Divider variant="inset" sx={{ marginLeft: '110px' }} />
        <AppMainLayout open={open}>
          <Objectives />
        </AppMainLayout>
      </Box>
    </AppLayout>
  );
};

export default ProjectPage;
