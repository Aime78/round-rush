import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

type emailData = {
  email: string;
};
type emailFormProp = emailData & {
  updateFields: (fields: Partial<emailData>) => void;
};

export const EmailForm = ({ email, updateFields }: emailFormProp) => {
  return (
    <Box>
      <Typography>Sign Up</Typography>
      <Typography>Let's validate your email first</Typography>
      <TextField label="Insert your email" value={email} onChange={(e) => updateFields({ email: e.target.value })} />
    </Box>
  );
};
