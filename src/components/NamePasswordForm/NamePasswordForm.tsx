import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

type NamePasswordData = {
  fullName: string;
  password: string;
};
type NamePasswordFormProps = NamePasswordData & {
  updateFields: (fields: Partial<NamePasswordData>) => void;
};

export const NamePasswordForm = ({ fullName, password, updateFields }: NamePasswordFormProps) => {
  return (
    <Box>
      <Typography>SignUp</Typography>
      <Typography>Fill up your account information</Typography>
      <TextField label="Insert your full name" value={fullName} onChange={(e) => updateFields({ fullName: e.target.value })} />
      <TextField label="Choose your password" type="password" autoComplete="false" value={password} onChange={(e) => updateFields({ password: e.target.value })} />
    </Box>
  );
};
