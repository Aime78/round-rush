import { useState } from 'react';
import { Avatar, Box, TextField, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { SpacesettingsButton, SpacesettingsSave } from '../../assets/SpacesettingsIcon';

export const SpaceSettingsInfo = () => {
  const [language, setLanguage] = useState('');

  return (
    <Box sx={{ padding: '60px 0 ' }} ml={2}>
      <Typography sx={{ color: '#31394E', fontSize: '24px' }}>Info</Typography>
      <Box mt={6}>
        <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Avatar</Typography>
        <Avatar sx={{ width: '30px', height: '30px', marginTop: '10px' }} alt="Cindy Baker" src="https://source.unsplash.com/mEZ3PoFGs_k" />
      </Box>
      <Box mt={2} sx={{ width: '600px' }}>
        <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Full Name</Typography>
        <TextField size="small" sx={{ width: '100%', marginTop: '10px' }} defaultValue="Emiliya Perevalova" />
      </Box>
      <Box mt={2} sx={{ width: '600px' }}>
        <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Username</Typography>
        <TextField size="small" sx={{ width: '100%', marginTop: '10px' }} defaultValue="emiliya.perevalova" />
      </Box>
      <Box mt={2} sx={{ width: '600px' }}>
        <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Email</Typography>
        <TextField size="small" sx={{ width: '100%', marginTop: '10px' }} defaultValue="emiliya.perevalova@wms.com" />
      </Box>
      <Box mt={6}>
        <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'rgba(49, 57, 78, 0.5)' }}>PREFERENCES</Typography>
      </Box>
      <Box mt={4} sx={{ width: '200px' }}>
        <Typography sx={{ fontSize: '13px', color: '#ADB0B8' }}>Language</Typography>
        <TextField select size="small" sx={{ marginTop: '10px' }} label="language" defaultValue="Italian" value={language} onChange={(e) => setLanguage(e.target.value)} fullWidth>
          <MenuItem value="IT">Italiano</MenuItem>
          <MenuItem value="EN">English</MenuItem>
          <MenuItem value="FR">French</MenuItem>
          <MenuItem value="SP">Spanish</MenuItem>
        </TextField>
      </Box>
      <Box mt={8}>
        <SpacesettingsButton />
      </Box>
      <Box sx={{ position: 'absolute', bottom: '-100px', right: '50px' }}>
        <SpacesettingsSave />
      </Box>
    </Box>
  );
};
