import express from 'express';
import * as dotenv from 'dotenv';
import Stripe from 'stripe';

// const sanityClient = require('@sanity/client');

dotenv.config();

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

// const sanityClient = sanityClient({
//     projectId: 'obv0yatn',
//     dataset: 'production',
//     apiVersion: '2023-05-06',
//     useCdn: true,
//     token: process.env.REACT_APP_PUBLIC_SANITY_TOKEN
//   });

const router = express.Router();

router.route('/').post(async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        try {
            // const itemsQuery = `*[_type == "product"]`;
            // const sanityData = await sanityClient.fetch(itemsQuery)
            //             .then((data) => {
            //               dispatch(setItems(data));
            //             })
            //             .catch((error) => {
            //               console.log(error);
            //             });
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                customer_email: req.body.email,
                // shipping_options: [
                //     { shipping_rate: 'shr_1Kn3IaEnylLNWUqj5rqhg9oV' },
                // ],
                line_items: req.body.products.map((item) => {
                    const img = item.image[0].asset._ref;
                    // const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');
        
                    return {
                        price_data: { 
                            currency: 'gbp',
                            product_data: { 
                                name: item.name,
                                images: [img],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled:true,
                            minimum: 1,
                        },
                        quantity: item.count
                    }
                }),
                success_url: `${req.headers.origin}/checkout/success`,
                cancel_url: `${req.headers.origin}/checkout`,
            }
    
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
    
            res.status(200).json(session);
        } catch (err) {
            console.error(err);
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
});

export default router;