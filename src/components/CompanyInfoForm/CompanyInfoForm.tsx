import { Box, TextField, Typography, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

type CompanyInfoFormData = {
  companyName: string;
  spaceName: string;
  industry: string;
  employees: string;
};

type CompanyInfoFormProps = CompanyInfoFormData & {
  updateFields: (fields: Partial<CompanyInfoFormData>) => void;
};

export const CompanyInfoForm = ({ companyName, spaceName, industry, employees, updateFields }: CompanyInfoFormProps) => {
  return (
    <Box>
      <Typography>Sign up</Typography>
      <Typography>Create your company space</Typography>
      <Box>
        <Typography>Company Name</Typography>
        <TextField label="company name" value={companyName} onChange={(e) => updateFields({ companyName: e.target.value })} />
        <Typography>Your space will be</Typography>
        <TextField label="Your space will be" value={spaceName} onChange={(e) => updateFields({ spaceName: e.target.value })} />
        <Typography>Industry</Typography>
        <TextField select defaultValue="Industry type" label="Industry" value={industry} onChange={(e) => updateFields({ industry: e.target.value })}>
          <MenuItem value="software">Software development</MenuItem>
          <MenuItem value="manufacturing">Manufacturing</MenuItem>
          <MenuItem value="food">Food</MenuItem>
        </TextField>
        <Typography>Number of employees</Typography>
        <TextField select defaultValue="Select size.." label="company name" value={employees} onChange={(e) => updateFields({ employees: e.target.value })}>
          <MenuItem value="1-10">1-10</MenuItem>
          <MenuItem value="10-100">10-100</MenuItem>
          <MenuItem value="100-1000">100-1000</MenuItem>
        </TextField>
        <FormControlLabel control={<Checkbox />} label="Accetto le Condizioni di utilizzo e Informativa sulla Privacy" />
      </Box>
    </Box>
  );
};
