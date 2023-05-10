import { Box, Button, IconButton, Typography, Rating, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import {ImageMagnifier} from "../../components/ImageMagnifier";
import {SwiperSlider} from "../../components/SwiperSlider";
import {client, urlFor} from "../../lib/client";


const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState([]);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItemFromSanity() {
    const itemQuery = `*[_type == "product" && id == ${itemId}]`;
    const itemData = await client.fetch(itemQuery)
                      .then((data) => {
                        setItem(data);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
  }

  async function getItemsExcludeThisItemFromSanity() {
    const itemsQuery = `*[_type == "product" && id != ${itemId}]`;
    const itemsData = await client.fetch(itemsQuery)
                      .then((data) => {
                        setItems(data);
                      })
                      .catch((error) => {
                        console.log(error);
                      });

  }

  useEffect(() => {
      getItemFromSanity();
      getItemsExcludeThisItemFromSanity();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  
  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px" justifyContent="top">
        <Stack>
          <ImageMagnifier
            alt={item[0]?.name}
            width="90%"
            src={item[0]?.image && urlFor(item[0]?.image[index])}
            style={{ objectFit: "contain" }}
          />
        </Stack>
        <Stack direction="row" spacing={0.5}>
          {item[0]?.image?.map((itemImgs, i) => (
                <img 
                  key={i}
                  alt={itemImgs}
                  src={urlFor(itemImgs)}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
        </Stack>

        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25px 0" display="flex" justifyContent="space-between">
            <Typography variant="h3" fontWeight="bold">{item[0]?.name}</Typography>
            <Typography variant="h3" fontWeight="bold">£{item[0]?.price}</Typography>
          </Box>
          <Box m="25px 0 25px 0">
            <Rating name="read-only" value={5} readOnly />
            <Typography sx={{ mt: "20px" }}>
            {item[0]?.longDescription}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item[0], count } }))}
            >
              ADD TO BAG
            </Button>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: 
              { item[0]?.category && item[0]?.category
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </Typography>
          </Box>

          {/* RELATED ITEMS */}
          <Box mt="50px" width="100%">
            <Typography variant="h3" fontWeight="bold">
              You may also like
            </Typography>
            <Box
              mt="20px"
              display="flex"
              flexWrap="wrap"
              columnGap="0%"
              justifyContent="space-between"
            >
              {items && items.slice(0, 3).map((item, i) => (

                <Item key={`${item.name}-${i}`} item={item} showAddToBag={false} />
              ))}
            </Box>
          </Box>

          {/* RELATED ITEMS */}
          <Box mt="50px" width="100%">
            <Typography variant="h3" fontWeight="bold">
              Complete the look
            </Typography>
            <Box
              mt="20px"
              display="flex"
              flexWrap="wrap"
              columnGap="0%"
              justifyContent="space-between"
            >
              {items && items.slice(0, 3).map((item, i) => (
                <Item key={`${item.name}-${i}`} item={item} showAddToBag={false} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item[0]?.longDescription}</div>
        )}
        {value === "reviews" && <div>reviews</div>}
      </Box>

      
    </Box>
  );
};

export default ItemDetails;