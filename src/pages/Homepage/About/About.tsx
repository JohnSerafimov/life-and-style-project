import React from 'react';
import { Box, Typography } from '@mui/material';
import './style.scss';

const About = () => {
  return (
    <Box className="about-container">
      {/* <Box className="header-container">
        <Typography variant="h4" className="header">About</Typography>
      </Box> */}
      <Box className="phone-border">
        <Box className="phone-inner-border">
          <Box className="phone-speaker-and-camera">
            <Box className="phone-speaker" />
            <Box className="phone-camera" />
          </Box>
          <Box className="phone-content">

          </Box>
        </Box>
      </Box>
      <Box className="info-box box-one">
        <Box className="info-header">
          <Box className="info-image-container">
            <Box className="info-image">

            </Box>
          </Box>
          <Typography className="info-name">
            Lorem Ipsum
          </Typography>
        </Box>
        <Box className="info-footer">
          <Typography className="info-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Box>
      <Box className="info-box box-two">
        <Box className="info-header">
          <Box className="info-image-container">
            <Box className="info-image">

            </Box>
          </Box>
          <Typography className="info-name">
            Lorem Ipsum
          </Typography>
        </Box>
        <Box className="info-footer">
          <Typography className="info-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Box>
      <Box className="info-box box-three">
        <Box className="info-header">
          <Box className="info-image-container">
            <Box className="info-image">

            </Box>
          </Box>
          <Typography className="info-name">
            Lorem Ipsum
          </Typography>
        </Box>
        <Box className="info-footer">
          <Typography className="info-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default About