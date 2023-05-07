## Introduction
It is a FULLSTACK React Ecommerce App that is fully Responsive with Stripe for Payment, Sanity as the Content Mangement System to manage the product data. 

It contains several features. In the home page, it has a Carousel to show different banners. In the item details page, the main image has magnified view when user mouse over on it. And user can also select the small images under main image to show it in the main image box. User can add the item to the shopping cart and go to checkout. The checkout contains of 2 steps forms to gather user contact info. And then it will redirect to Stripe to collect the payment. If payment success, it will redirect back to the success page to show the confirmation.

Demo site:  https://myfashion-frontend.onrender.com/

## Tech stack
React.js, Material UI, Node.js, Express.js, Stripe Payment Platform, Sanity Content Management

## How to start Sanity
```
npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production
npm run develop
```
### How to start backend (nodejs)
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
npm install @sanity/client @sanity/image-url

npm run start
```

## How to deploy Sanity
1. run command in sanity directory
```
sanity deploy
```
2. input the studio name
3. after the frontend deployed, add the hostname to cors with credential

## How to deploy backend to render
1. click new web service
2. select the project in github
3. input the name, eg. myfashion-backend
4. input branch in github
5. input the backend directory for root directory, eg. backend
6. input the build command, eg. npm install
7. input the start command, eg. npm run start

## How to deploy frontend (react js app) to render
1. click new static site
2. select the project in github
3. input the name, eg. myfashion-frontend
4. input branch in github
5. input the backend directory for root directory, eg. client
6. input the build command, eg. npm run build
7. input the publish directory, eg. build
8. add the rewrite rules, source: /*, destination: /index.html, action: Rewrite

## Google Font
https://fonts.google.com/specimen/Fauna+One?query=Fauna+One

## Image Magnifier
https://dev.to/anxiny/create-an-image-magnifier-with-react-3fd7

## Sanity with react
https://www.sanity.io/guides/create-a-single-page-application-with-react-and-sanity

## Future thoughts
```
1. Fix bugs on adding duplicate item
2. Add checking of product price with backend db
3. Add myFavourite function
4. Add input review function
5. Add swiperslider on "You may also like" and "Complete the look" section
6. Add link to the carousel
```