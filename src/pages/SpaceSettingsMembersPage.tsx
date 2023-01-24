import { Box, Divider } from '@mui/material';
import Members from '../components/Members';
import NavDrawer from '../components/NavDrawer';
import SpacesettingsHeaderRight from '../components/SpacesettigsHeaderRIght';
import SpaceSettings from '../components/SpaceSettings';
import SpacesttingsHeaderLeft from '../components/SpacesettingsHeaderLeft';
import AppHeaderLayout from '../layout/AppHeaderLayout/AppHeaderLayout';
import AppLayout from '../layout/AppLayout/AppLayout';
import AppMainLayout from '../layout/AppMainLayout/AppMainLayout';

const SpaceSettingsMembersPage = () => {
  return (
    <AppLayout>
      <NavDrawer />
      <Box>
        <Box sx={{ padding: '20px 50px ' }}>
          <AppHeaderLayout leftContainer={<SpacesttingsHeaderLeft />} rightContainer={<SpacesettingsHeaderRight />} />
        </Box>
        <Divider variant="inset" sx={{ marginLeft: '110px' }} />
        <AppMainLayout>
          <Box sx={{ display: 'flex' }}>
            <SpaceSettings />
            <Divider orientation="vertical" variant="middle" sx={{ margin: '60px 30px ', height: '80vh' }} flexItem />
            <Members />
          </Box>
        </AppMainLayout>
      </Box>
    </AppLayout>
  );
};

export default SpaceSettingsMembersPage;
