import { Box, TextField, InputAdornment } from '@mui/material';
import { ArrowUp, MilestoneButton, Requirements, RightArrow, SearchIcon } from '../../assets/ObjectivesIcons';

export const Objectives = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mt={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <TextField
            size="small"
            label="Choose something"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box ml={4} sx={{ display: 'flex', gap: '20px' }}>
            <RightArrow />
            <ArrowUp />
          </Box>
        </Box>
        <Box>
          <MilestoneButton />
          <Requirements />
        </Box>
      </Box>
      <Box>Objectives</Box>
    </Box>
  );
};
