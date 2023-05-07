import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import {setItems} from '../../state';
import {client, urlFor} from "../../lib/client";

const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    async function getItems() {
        const items = await fetch(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/api/items?populate=image`, 
          {method: "GET"}
        );

        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data));

    }

    async function getItemsFromSanity() {
      const itemsQuery = `*[_type == "product"]`;
      const itemsData = await client.fetch(itemsQuery)
                        .then((data) => {
                          console.log(data);
                          dispatch(setItems(data));
                        })
                        .catch((error) => {
                          console.log(error);
                        });
  
    }

    useEffect(()=>{
      getItemsFromSanity();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const topRatedItems = items.filter(
      (item) => item.category === "topRated"
    );

    const newArrivalsItems = items.filter(
      (item) => item.category === "newArrivals"
    );

    const bestSellersItems = items.filter(
      (item) => item.category === "bestSellers"
    );
    


  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 200px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="0.5%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  )
}

export default ShoppingList