# React Ecommerce App - MyFashion

This is a full-stack React ecommerce app that provides a seamless online shopping experience. It is built using React.js, Material UI for UI components, Node.js, Express.js for the backend server, Stripe for payment processing, and Sanity as the content management system to manage product data. The app is fully responsive, ensuring a smooth and consistent user experience across different devices.

## Demo site
https://myfashion-frontend.onrender.com/

## Tech stack
React.js, Material UI, Node.js, Express.js, Stripe Payment Platform, Sanity Content Management

## Features

### Home Page Carousel

The home page of the app features a carousel that displays different banners. This visually engaging component helps highlight promotions, featured products, or any other important information to attract users' attention.

### Item Details Page

The item details page provides comprehensive information about a specific product. It includes a main product image that offers a magnified view when the user hovers over it. Additionally, the user can select small images below the main image to display them in the main image box, allowing for a closer look at different angles or variations of the product.

### Shopping Cart

The app includes a shopping cart functionality that enables users to add items to their cart for later purchase. Users can add multiple items, adjust quantities, and remove items from the cart as needed. The cart provides a summary of selected items, including their prices and quantities.

### Checkout Process

The checkout process consists of a two-step form that collects user contact information. This information is essential for order processing and delivery purposes. Once the user completes the form, they proceed to the payment step.

### Stripe Payment Integration

To facilitate secure and seamless online payments, the app integrates with Stripe, a popular payment processing platform. After providing their contact information, users are redirected to Stripe's payment gateway to securely complete their transaction. The integration ensures that sensitive payment details are handled securely and that customers have a reliable and trustworthy payment experience.

### Confirmation Page

Upon successful payment, users are redirected back to the app's confirmation page. This page serves as a confirmation of the completed transaction. It assures customers that their order has been successfully processed.

## Installation

To run the React ecommerce app locally, follow these steps:

* Clone the repository:

   ```bash
   git clone https://github.com/clairetsoi1129/react-ecommerce-myfashion.git
   ```

* Complete the Backand setup, Frontend setup, Sanity setup.

### Backend setup

1. Navigate to the project directory (backend):

   ```bash
   cd react-ecommerce-myfashion/backend
   ```

3. Install the dependencies (backend):

   ```bash
   npm install
   ```

4. Set up the necessary environment variables (backend):

   - Create a `.env` file in the root directory of the project.
   - Add the following variables to the `.env` file:
     ```
     REACT_APP_STRIPE_SECRET_KEY=your_stripe_secret_key
     ```
   - Replace `your_stripe_secret_key` with your Stripe secret key.

5. Start the development server (backend):

   ```bash
   npm start
   ```

### Frontend setup
1. Navigate to the project directory (frontend):

   ```bash
   cd react-ecommerce-myfashion/client
   ```

3. Install the dependencies (frontend):

   ```bash
   npm install
   ```

4. Set up the necessary environment variables (frontend):

   - Create a `.env` file in the root directory of the project.
   - Add the following variables to the `.env` file:
     ```
     REACT_APP_NODEJS_BASE_URL=your_backend_url
     REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
     REACT_APP_PUBLIC_SANITY_TOKEN=your_sanity_token
     ```
   - Replace `your_backend_url` with the url of your backend, eg. http://localhost:8080, `your_stripe_publishable_key` with your Stripe publishable key and `your_sanity_token` with your Sanity token.

5. Start the development server:

   ```bash
   npm start
   ```

### Sanity setup
1. Navigate to the project directory (sanity-project):

    ```bash
    cd react-ecommerce-myfashion/sanity-project
    ```

2. Start the development server:
    ```bash
    npm run dev
    ```

### Start navigation

* Open your browser and navigate to `http://localhost:3000` to access the app.

## Deployment

To deploy the React ecommerce app to a production environment, you can follow these general steps:

1. Build the optimized production-ready bundle:

   ```bash
   npm run build
   ```

2. Deploy the generated `build` directory to your preferred hosting service or server.

3. Set up the required environment variables (e.g., Stripe API key and Sanity API token) in your production environment.

4. Configure any necessary server-side routing or proxy settings to ensure proper functionality of the app, especially for the Stripe payment

### My way to deploy Sanity
1. Run below command in sanity directory

    ```
    sanity deploy
    ```

2. Input the studio name
3. After frontend deployed, add the hostname to cors with credential

### My way to deploy backend (nodejs) in render
1. Register / Signin to https://render.com/
2. Click new web service
3. Select the project in github
4. Input the name, eg. myfashion-backend
5. Input branch in github
6. Input the backend dIrectory for root directory, eg. backend
7. Input the build comIand, eg. npm install
8. Input the start command, eg. npm run start

### My way to deploy frontend (reactjs) in render
1. Register / Signin to https://render.com/
2. click new static site
3. Select the project in github
4. Input the name, eg. myfashion-frontend
5. Input branch in github
6. Input the backend directory for root directory, eg. client
7. Input the build command, eg. npm run build
8. Input the publish directory, eg. build
9. Add the rewrite rules, source: /*, destination: /index.html, action: Rewrite

## Future thoughts
1. Fix bugs on adding duplicate item
2. Add checking of product price with backend db
3. Add myFavourite function
4. Add input review function
5. Add swiperslider on "You may also like" and "Complete the look" section
6. Add link to the carousel
7. Add relevant order details such as order number, payment summary, and estimated delivery information in confirmation page

## How to start the development from scratch?
### Start Sanity
```
npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production
npm run develop
```

### Start backend (nodejs)
```
npm init -y
npm install cors dotenv express mongoose nodemon
npm install --save stripe
npm install @sanity/client

npm run start
```

### Start frontend (reactjs)
```
npx create-react-app client
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom@6 react-redux @reduxjs/toolkit formik yup dotenv react-responsive-carousel
npm install swiper
npm install @stripe/react-stripe-js @stripe/stripe-js
npm install @sanity/client @sanity/image-url

npm run start
```

# Reference
## Build a FULLSTACK React Ecommerce App that is fully Responsive with Stripe Payment
https://www.youtube.com/watch?v=EBCdyQ_HFMo

## Google Font
https://fonts.google.com/specimen/Fauna+One?query=Fauna+One

## Image Magnifier
https://dev.to/anxiny/create-an-image-magnifier-with-react-3fd7

## Sanity with react
https://www.sanity.io/guides/create-a-single-page-application-with-react-and-sanity


