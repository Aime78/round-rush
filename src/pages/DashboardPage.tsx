import { Box, Divider } from '@mui/material';
import NavDrawer from '../components/NavDrawer';
import AppHeaderLayout from '../layout/AppHeaderLayout/AppHeaderLayout';
import AppLayout from '../layout/AppLayout/AppLayout';
import DashboardHeaderLeft from '../components/DashboardHeaderLeft';
import AppMainLayout from '../layout/AppMainLayout/AppMainLayout';
import DashboardHeaderRight from '../components/DashboardHeaderRight';
import BoardProjects from '../components/BoardProjects';
import BoardTasks from '../components/BoardTasks';

const DashboardPage = () => {
  return (
    <AppLayout>
      <NavDrawer />
      <Box>
        <Box sx={{ padding: '20px 50px ' }}>
          <AppHeaderLayout leftContainer={<DashboardHeaderLeft />} rightContainer={<DashboardHeaderRight />} />
        </Box>
        <Divider variant="inset" sx={{ marginLeft: '110px' }} />

        <AppMainLayout>
          <Box sx={{ display: 'flex' }}>
            <BoardProjects />
            <Divider orientation="vertical" variant="middle" sx={{ marginTop: '110px' }} flexItem />

            <BoardTasks />
          </Box>
        </AppMainLayout>
      </Box>
    </AppLayout>
  );
};

export default DashboardPage;
