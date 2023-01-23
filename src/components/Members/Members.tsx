import { Box, Typography, Avatar, tableCellClasses, Skeleton, Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DotsIcon } from '../../assets/ObjectivesIcons';
import { useGetUsers } from '../../hooks/getUsers';

export const Members = () => {
  const { users } = useGetUsers();

  return (
    <Box sx={{ padding: '60px 0px 0 50px', width: '72%' }}>
      <Typography sx={{ color: '#31394E', fontSize: '24px' }}>Users on plan</Typography>
      <Box mt={2}>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table
            sx={{
              width: '100%',
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>NAME</TableCell>
                <TableCell align="left" sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                  EMAIL
                </TableCell>
                <TableCell align="left" sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                  STATUS
                </TableCell>
                <TableCell align="left" sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.loading ? (
                <>
                  <Skeleton variant="rectangular" width={810} height={20} animation="wave" />
                  <Divider />
                  <Skeleton variant="rectangular" width={810} height={20} animation="wave" />
                  <Divider />
                  <Skeleton variant="rectangular" width={810} height={20} animation="wave" />
                </>
              ) : (
                users.users.map((user) => (
                  <TableRow key={user.id} sx={{ width: '50px', padding: '0' }}>
                    <TableCell component="th" scope="row">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Avatar sx={{ width: '30px', height: '30px' }} alt="Cindy Baker" src="https://source.unsplash.com/mEZ3PoFGs_k" />
                        <Typography sx={{ fontSize: '16px', color: '#31394E', fontWeight: '400' }}>{user.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#838895' }}>{user.email}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography sx={{ fontSize: '13px', fontWeight: '400', color: '#29C293' }}>Active</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <DotsIcon />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
