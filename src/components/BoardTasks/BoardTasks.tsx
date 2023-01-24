import { Box, Typography, List, ListItem, Link } from '@mui/material';
import { useAppSelector } from '../../app/features/hooks';
import { GotoProjectIcon, TwelveIcon } from '../../assets/DashboardIcons';
import tasksOne, { TwentyFourIcon } from '../../assets/DashboardTaskIcons';
import appRoutes from '../../routes/routes';

export const BoardTasks = () => {
  const { open } = useAppSelector((state) => state.drawer);

  return (
    <Box sx={{ width: '40%', padding: '60px 50px 0 20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '26px', fontWeight: '600', fontStyle: 'normal', color: '#4C84FF' }}>Marketing</Typography>
        <Link href={appRoutes.PROJECT} underline="hover">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#838895' }}>Go to the project</Typography>
            <GotoProjectIcon />
          </Box>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }} mt={6}>
        <Typography sx={{ fontSize: '18px', color: '#31394E' }}>Todos</Typography>
        <TwelveIcon />
      </Box>
      {open ? (
        <List>
          {tasksOne.map((task) => (
            <ListItem>{task}</ListItem>
          ))}
        </List>
      ) : (
        <Box mt={2}>
          {tasksOne.map((task) => (
            <Box>{task}</Box>
          ))}
        </Box>
      )}

      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }} mt={6}>
        <Typography sx={{ fontSize: '18px', color: '#31394E' }}>Pending Reviews</Typography>
        <TwentyFourIcon />
      </Box>
      {open ? (
        <List>
          {tasksOne.map((task) => (
            <ListItem>{task}</ListItem>
          ))}
        </List>
      ) : (
        <Box mt={2}>
          {tasksOne.map((task) => (
            <Box>{task}</Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
