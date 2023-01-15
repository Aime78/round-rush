import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const EmailForm = () => {
  return (
    <Box>
      <Typography>Sign Up</Typography>
      <Typography>Let's validate your email first</Typography>
      <TextField label="your email" placeholder="Insert your email" />
    </Box>
  );
};
