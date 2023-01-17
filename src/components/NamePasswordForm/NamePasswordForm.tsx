import { TextField, Typography } from '@mui/material';

import { styleFormDescription, styleFormInput, styleFormTitle } from '../../theme/customTheme';

type NamePasswordData = {
  fullName: string;
  password: string;
};

type NamePasswordFormProps = NamePasswordData & {
  updateFields: (fields: Partial<NamePasswordData>) => void;
};

export const NamePasswordForm = ({ fullName, password, updateFields }: NamePasswordFormProps) => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }}>SignUp</Typography>
      <Typography variant="body1" mt={2} mb={4} sx={{ ...styleFormDescription }}>
        Fill up your account information
      </Typography>
      <TextField size="small" sx={{ ...styleFormInput }} label="Insert your full name" value={fullName} onChange={(e) => updateFields({ fullName: e.target.value })} />
      <TextField
        size="small"
        sx={{ ...styleFormInput }}
        label="Choose your password"
        type="password"
        autoComplete="false"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </>
  );
};
