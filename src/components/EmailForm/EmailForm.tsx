import { TextField, Typography } from '@mui/material';
import { styleFormDescription, styleFormInput, styleFormTitle } from '../../theme/customTheme';

type emailData = {
  email: string;
};

type emailFormProp = emailData & {
  updateFields: (fields: Partial<emailData>) => void;
};

export const EmailForm = ({ email, updateFields }: emailFormProp) => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }}>Sign Up</Typography>
      <Typography variant="body1" mt={2} mb={4} sx={{ ...styleFormDescription }}>
        Let's validate your email first
      </Typography>
      <TextField sx={{ ...styleFormInput }} size="small" label="Insert your email" type="email" value={email} onChange={(e) => updateFields({ email: e.target.value })} />
    </>
  );
};
