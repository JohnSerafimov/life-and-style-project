import { Box, Typography } from '@mui/material';
import React from 'react'
import './style.scss';

const HeroImage = () => {
  return (
    <Box className="hero-image-container">
      <Box className="header-container">
        <Typography variant="h3" className="header">Life &amp; Style</Typography>
        <Typography variant="h3" className="header">Project</Typography>
      </Box>
      <Box className="bottom-border" />
    </Box>
  )
}

export default HeroImage