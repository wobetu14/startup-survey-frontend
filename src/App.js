import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CompanyRegistration from './CompanyRegistration';

export default function App() {
  return (
    <Box>
      {/* color:'#006ba1' */}
      <AppBar elevation={1} sx={{ backgroundColor:'#1DA1F2', height:'120px' }} position='relative'>
        <Toolbar sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', padding:'20px' }}>
        <Typography variant="h5" component="div" sx={{ textAlign:'center', fontWeight:500  }}>
            The Federal Democratic Republic of Ethiopia
          </Typography>
          <Typography variant="h6" component="div" sx={{ textAlign:'center' }}>
            Ministry of Innovation and Technology
          </Typography>
        </Toolbar>
      </AppBar>

     <CompanyRegistration />
    </Box>
  );
}