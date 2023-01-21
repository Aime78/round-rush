import { useState } from 'react';
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
  const [open, setOpen] = useState(false);
  return (
    <AppLayout>
      <NavDrawer open={open} setOpen={setOpen} />
      <Box>
        <Box sx={{ padding: '20px 50px ' }}>
          <AppHeaderLayout leftContainer={<DashboardHeaderLeft />} rightContainer={<DashboardHeaderRight />} open={open} />
        </Box>
        <Divider variant="inset" sx={{ marginLeft: '110px' }} />

        <AppMainLayout open={open}>
          <Box sx={{ display: 'flex' }}>
            <BoardProjects />
            <Divider orientation="vertical" flexItem />

            <BoardTasks open={open} />
          </Box>
        </AppMainLayout>
      </Box>
    </AppLayout>
  );
};

export default DashboardPage;
