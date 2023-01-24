import { Box, Divider } from '@mui/material';
import NavDrawer from '../components/Navigation/NavDrawer';
import AppLayout from '../layout/AppLayout/AppLayout';
import AppHeaderLayout from '../layout/AppHeaderLayout/AppHeaderLayout';
import ProjectheaderLeft from '../components/Projects/ProjectheaderLeft';
import ProjectheaderRight from '../components/Projects/ProjectheaderRight';
import AppMainLayout from '../layout/AppMainLayout/AppMainLayout';
import Objectives from '../components/Projects/Objectives';

const ProjectPage = () => {
  return (
    <AppLayout>
      <NavDrawer />
      <Box>
        <Box sx={{ padding: '20px 50px 0 50px' }}>
          <AppHeaderLayout leftContainer={<ProjectheaderLeft />} rightContainer={<ProjectheaderRight />} />
        </Box>
        <Divider variant="inset" sx={{ marginLeft: '110px' }} />
        <AppMainLayout>
          <Objectives />
        </AppMainLayout>
      </Box>
    </AppLayout>
  );
};

export default ProjectPage;
