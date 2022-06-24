import React from 'react';
import { Box, Typography } from '@mui/material';
import "./style.scss";
import ImageBox from '../../../components/ImageBox/ImageBox';
import John from "../../../shared/images/john.jpg";
import Antoniya from "../../../shared/images/antoniya.jpg";
import Villi from "../../../shared/images/villi.jpg";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface Reviwers {
  image: string;
  username: string;
  description: string;
  rating: number;

}


const RatingAndReviews = () => {
  const reviewers: Reviwers[] = [
    {
      image: Villi,
      username: "Jennifer Ostin",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wo",
      rating: 4,
    },
    {
      image: Antoniya,
      username: "Michael Turner",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem I",
      rating: 5,
    },
    {
      image: John,
      username: "Callep Sekira",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      rating: 2,
    }
  ]
  return (
    <Box className="rating-and-reviews-container">
      <Box className="header-container">
        <Typography variant="h4" className="header">Rating And Reviews</Typography>
      </Box>
      <Box className="footer-container">
        {
          reviewers.map((reviewer) => {
            return (
              <Box className="reviewer-container">
                <Box className="reviewer-image">
                  <ImageBox
                    width={200}
                    height={200}
                    image={reviewer.image}
                    type="round"
                    borderColor="primary"
                  />
                </Box>
                <Typography variant="h6" className="reviewer-username">{reviewer.username}</Typography>
                <Typography className="reviewer-description">{reviewer.description}</Typography>
                <Box className="stars-container">
                  {
                    [1,2,3,4,5].map((rate) => {
                      return rate <= reviewer.rating ? (
                        <StarIcon className="star" />
                      ) : (
                        <StarBorderIcon className="star" />
                      )
                    })
                  }
                </Box>
                <Typography className="reviewer-rating">{reviewer.rating}/5 Rating</Typography>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default RatingAndReviews