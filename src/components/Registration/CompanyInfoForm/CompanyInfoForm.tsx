import { Box, TextField, Typography, MenuItem, Checkbox } from '@mui/material';
import { styleFormDescription, styleFormTitle } from '../../../theme/customTheme';
import { companyDescriptionStyle, companyInputStyle } from './companyInfoStyle';

type CompanyInfoFormData = {
  companyName: string;
  spaceName: string;
  industry: string;
  employees: string;
  doescompanyExist: boolean;
};

type CompanyInfoFormProps = CompanyInfoFormData & {
  updateFields: (fields: Partial<CompanyInfoFormData>) => void;
};

export const CompanyInfoForm = ({ companyName, spaceName, industry, employees, doescompanyExist, updateFields }: CompanyInfoFormProps) => {
  return (
    <>
      <Typography sx={{ ...styleFormTitle }}>Sign up</Typography>
      <Typography variant="body1" mt={2} mb={4} sx={{ ...styleFormDescription }}>
        Create your company space
      </Typography>
      <Box>
        <Typography sx={{ ...companyDescriptionStyle }}>Company Name</Typography>
        <TextField size="small" sx={{ ...companyInputStyle }} label="company name" value={companyName} onChange={(e) => updateFields({ companyName: e.target.value })} />
        <Typography sx={{ ...companyDescriptionStyle }}>Your space will be</Typography>
        <TextField
          size="small"
          sx={{ ...companyInputStyle }}
          label="Your space will be"
          value={spaceName}
          onChange={(e) => updateFields({ spaceName: e.target.value })}
          error={doescompanyExist ? true : false}
          helperText={doescompanyExist ? 'This space name is not available' : ''}
        />
        <Typography sx={{ ...companyDescriptionStyle }}>Industry</Typography>
        <TextField size="small" sx={{ ...companyInputStyle }} select defaultValue="Industry type" label="Industry" value={industry} onChange={(e) => updateFields({ industry: e.target.value })}>
          <MenuItem value="software">Software development</MenuItem>
          <MenuItem value="manufacturing">Manufacturing</MenuItem>
          <MenuItem value="food">Food</MenuItem>
        </TextField>
        <Typography sx={{ ...companyDescriptionStyle }}>Number of employees</Typography>
        <TextField size="small" sx={{ ...companyInputStyle }} select defaultValue="Select size.." label="company name" value={employees} onChange={(e) => updateFields({ employees: e.target.value })}>
          <MenuItem value="1-10">1-10</MenuItem>
          <MenuItem value="10-100">10-100</MenuItem>
          <MenuItem value="100-1000">100-1000</MenuItem>
        </TextField>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Checkbox />
          <Typography sx={{ fontSize: '12px', color: '#5A6171' }}>Accetto le Condizioni di utilizzo e Informativa sulla Privacy</Typography>
        </Box>
      </Box>
    </>
  );
};
