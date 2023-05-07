import { Stack, Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState, useEffect } from "react";
import {client, urlFor} from "../../lib/client";
import {heroBannersData} from "../../constants/heroBannersData";


const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [heroBanners, setHeroBanners] = useState(null);

  async function getBannersFromSanity() {
    const itemsQuery = `*[_type == "banner"]`;
    const itemsData = await client.fetch(itemsQuery)
                      .then((data) => {
                        console.log(data);
                        setHeroBanners(data);
                      })
                      .catch((error) => {
                        console.log(error);
                        setHeroBanners(heroBannersData);
                      });
  }

  useEffect(() => {
    getBannersFromSanity();
  }, []);

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {heroBanners && heroBanners.map((heroBanner, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={urlFor(heroBanner.image).url()}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Stack 
            color="white"
            padding="10px"
            borderRadius="1px"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgb(0, 0, 0, 0.0)"
            position="absolute"
            top="50%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? "300px" : "180px"}
          >
            <Typography variant="h1">{heroBanner.title}</Typography>

            <Box
                color="black"
                marginTop={isNonMobile ? "5px" : "5px"}
                padding={isNonMobile ? "10px" : "1px"}
                borderRadius="1px"
                textAlign="center"
                backgroundColor="rgb(256, 256, 256, 1)"
                left={isNonMobile ? "10%" : "0"}
                right={isNonMobile ? undefined : "0"}
                margin={isNonMobile ? undefined : "0 auto"}
                maxWidth={isNonMobile ? "200px" : "150px"}
            >
                <Typography component="span" variant="h3" fontWeight="bold" >{heroBanner.action}</Typography>
                <IconButton
                
                    sx={{
                        color: "black",
                        padding: "5px",
                        zIndex: "10",
                    }}
                    >
                    <ArrowForwardIcon sx={{ fontSize: 20 }}/>
                </IconButton>
            </Box>
          </Stack>
            
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;