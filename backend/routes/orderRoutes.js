import express from 'express';
import * as dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);


const router = express.Router();

router.route('/').post(async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        try {
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