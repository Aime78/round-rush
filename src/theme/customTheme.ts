import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4C84FF',
    },
  },
});

export const styleFormTitle = {
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '20px',
};

export const styleFormDescription = {
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#5A6171',
};

export const styleFormInput = {
  margin: '10px 0',
  width: '100%',
  background: '#FFFFFF',
  border: '1px solid #D9DBDE',
  borderRadius: '4px',
  color: '#ADB0B8',
};
