## Introduction
It is a FULLSTACK React Ecommerce App that is fully Responsive with Stripe Payment. It used Sanity to work as Content Mangement System to store the product data. 





## How to start backend (Strapi+Stripe)
```
npx create-strapi-app@latest server

cd server
npm install stripe
npm run develop
```

## How to start backend (Sanity+Stripe)
```
npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production

npm install stripe
npm run develop
```
### How to start nodejs backend (Sanity+Stripe)
```
npm init -y
npm install cors dotenv express mongoose nodemon
npm install --save stripe
npm install @sanity/client
```

## How to start frontend
```
npx create-react-app client
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom@6 react-redux @reduxjs/toolkit formik yup dotenv react-responsive-carousel
npm install swiper
npm install @stripe/react-stripe-js @stripe/stripe-js

npm run start
```

## How to start frontend with sanity
```
npm install @sanity/client @sanity/image-url
```

## How to deploy Sanity
```
sanity deploy
> myFashion
```

## Google Font
https://fonts.google.com/specimen/Fauna+One?query=Fauna+One

## Image Magnifier
https://dev.to/anxiny/create-an-image-magnifier-with-react-3fd7

## Sanity with react
https://www.sanity.io/guides/create-a-single-page-application-with-react-and-sanity

## Future thoughts
```
1. Add checking of product price with backend db
2. Add myFavourite function
3. Add input review function
```