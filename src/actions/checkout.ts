"use server"
//https://dashboard.stripe.com/
//https://www.npmjs.com/package/@stripe/stripe-js
import { CartProduct } from "@/provider/cart"
import Stripe from "stripe"

export const createCheckout = async (products: CartProduct[]) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-10-16"
    })

    const checkout = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.HOST_URL,
        cancel_url: process.env.HOST_URL,
        line_items: products.map(product => {
            return {
               price_data: {
                    currency: "brl",
                    product_data: {
                        name: product.name,
                        description: product.description,
                        images: product.imageUrls
                    },
                    unit_amount: product.totalPrice * 100
               },
               quantity: product.quantity
            }
        })
    })


    return checkout;
}