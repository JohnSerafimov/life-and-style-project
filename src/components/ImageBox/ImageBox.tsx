import React from 'react';
import { Box } from '@mui/material';
import "./style.scss";

interface ImageBoxProps {
    width: number;
    height: number;
    image?: string;
    type: "round" | "square";
    borderColor?: "primary" | "white" | string;
}

const ImageBox = (props: ImageBoxProps) => {
    const { width, height, image, type, borderColor = 'white' } = props;
    return (
        <Box
            className={`info-image-container ${type} color-${borderColor}`}
            sx={{ width, height }}
        >
            <Box
                className={`info-image ${type}`}
                component="div"
                sx={{
                    height: height * 0.93,
                    width: width * 0.93,
                    backgroundImage: `url(${image})`,
                }}
            />
        </Box>
    )
}

export default ImageBox