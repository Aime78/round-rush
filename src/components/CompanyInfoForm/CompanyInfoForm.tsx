import { Box, TextField, Typography, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

export const CompanyInfoForm = () => {
  return (
    <Box>
      <Typography>Sign up</Typography>
      <Typography>Create your company space</Typography>
      <Box>
        <Typography>Company Name</Typography>
        <TextField label="company name" />
        <Typography>Your space will be</Typography>
        <TextField label="Your space will be" />
        <Typography>Industry</Typography>
        <TextField select defaultValue="Industry type" label="Industry">
          <MenuItem>Software development</MenuItem>
        </TextField>
        <Typography>Number of employees</Typography>
        <TextField select defaultValue="Select size.." label="company name">
          <MenuItem>1-10</MenuItem>
          <MenuItem>10-100</MenuItem>
          <MenuItem>100-1000</MenuItem>
        </TextField>
        <FormControlLabel control={<Checkbox />} label="Accetto le Condizioni di utilizzo e Informativa sulla Privacy" />
      </Box>
    </Box>
  );
};
