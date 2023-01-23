import { useState } from 'react';
import { Box, TextField, InputAdornment, Typography, Checkbox, IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  AddNotificationIcon,
  ArrowUp,
  AssigneeOne,
  AssigneeTwo,
  CloseIcon,
  DeleteIcon,
  DotsIcon,
  MilestoneButton,
  PriorityIcon,
  Requirements,
  RightArrow,
  SearchIcon,
  WebappIcon,
} from '../../assets/ObjectivesIcons';
import objectiveList from '../../assets/ObjectivesLists';

export const Objectives = () => {
  const [openNotificationPanel, setOpenNotificationPanel] = useState(false);

  const handleOpenNotification = () => setOpenNotificationPanel(true);

  const handleCloseNotification = () => setOpenNotificationPanel(false);

  return (
    <Box sx={{ padding: '0 0 0 50px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mt={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <TextField
            size="small"
            label="Choose something"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box ml={4} sx={{ display: 'flex', gap: '20px' }}>
            <RightArrow />
            <ArrowUp />
          </Box>
        </Box>
        <Box>
          <MilestoneButton />
          <Requirements />
        </Box>
      </Box>
      <Box mt={2}>
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: '40%', fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>NAME</TableCell>
                <TableCell align="center" sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                  PRIORITY
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                  STATUS
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                  ASSIGNEES
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                  DUE DATE
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '14px', color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                  CHECKMARKS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {objectiveList.map((objective) => (
                <TableRow
                  key={objective.id}
                  sx={{ '&:nth-last-child(-n + 2) td, &:nth-last-child(-n + 2) th': { background: '#CEF2D8' }, width: '50px', padding: '0' }}
                  onClick={handleOpenNotification}
                >
                  <TableCell component="th" scope="row">
                    {objective.name}
                  </TableCell>
                  <TableCell align="center">{objective.priority}</TableCell>
                  <TableCell align="center">{objective.status}</TableCell>
                  <TableCell align="center">{objective.assignees}</TableCell>
                  <TableCell align="center" sx={{ color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                    {objective.dueDate}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'rgba(49, 57, 78, 0.5)', fontWeight: '600' }}>
                    {objective.checkmarks}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Notification center */}
      {openNotificationPanel && (
        <Box border={1} sx={{ width: '37%', position: 'absolute', top: '0', right: '0', background: '#FFFFFF', border: '2px solid #F4F6FC' }}>
          <Box sx={{ padding: '10px 10px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px', border: '2px solid #F4F6FC' }}>
            <DeleteIcon />
            <IconButton onClick={handleCloseNotification}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ padding: '25px 0 0 25px' }}>
            <Typography variant="h6" sx={{ fontSize: '24px', color: '#151B26', fontWeight: '600' }}>
              Notifications Center
            </Typography>
            <Box sx={{ padding: '20px 10px 0' }}>
              <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Description</Typography>
              <Typography sx={{ padding: '20px 25px 0 10px', fontSize: '14px', color: 'rgba(21, 27, 38, 0.5)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sed ullamcorper imperdiet consectetur pretium, vitae mattis varius. Tortor et amet eget posuere quis. Cursus nibh amet
                diam elementum accumsan, a. In tortor mauris in viverra et mi scelerisque facilisi. Turpis ut ac egestas tempor. Eu pretium nulla vitae scelerisque.
              </Typography>
            </Box>
            <Box sx={{ padding: '20px 10px 0' }}>
              <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Priority</Typography>
              <Box sx={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
                <PriorityIcon />
                <Typography sx={{ fontSize: '14px', color: '#31394E' }}>High Priority</Typography>
              </Box>
            </Box>
            <Box sx={{ padding: '20px 10px 0' }}>
              <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Subproject</Typography>
              <Box sx={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
                <WebappIcon />
                <Typography sx={{ fontSize: '14px', color: '#31394E' }}>Webapp</Typography>
              </Box>
            </Box>
            <Box sx={{ padding: '20px 10px 0' }}>
              <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Assignees</Typography>
              <Box sx={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
                <AssigneeOne />
                <AssigneeTwo />
              </Box>
            </Box>
            <Box sx={{ padding: '20px 10px 0' }}>
              <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Linked Projects</Typography>
              <Box sx={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
                <Typography sx={{ fontSize: '14px', color: '#31394E' }}>12/10/2019</Typography>
              </Box>
            </Box>
            <Box sx={{ padding: '20px 10px 0' }}>
              <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Due Date</Typography>
              <Box sx={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
                <Typography sx={{ fontSize: '14px', color: '#31394E' }}>12/10/2019</Typography>
              </Box>
            </Box>
            <Box mt={6} sx={{ padding: '0 10px', display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ color: '#4C84FF', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>Checkmarks</Typography>
              <AddNotificationIcon />
            </Box>
            <Box mt={2} ml={1}>
              <Box sx={{ padding: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: '14px' }}>Notifications Service</Typography>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <DotsIcon />
                  <Checkbox />
                </Box>
              </Box>
              <Box sx={{ padding: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: '14px' }}>Notifications Updated</Typography>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <DotsIcon />
                  <Checkbox checked />
                </Box>
              </Box>
              <Box sx={{ padding: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: '14px' }}>API server </Typography>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <DotsIcon />
                  <Checkbox checked />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
