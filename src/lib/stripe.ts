import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export interface CheckoutSession {
  serviceId: string;
  serviceName: string;
  price: number;
  customerEmail: string;
}

export async function createCheckoutSession({
  serviceId,
  serviceName,
  price,
  customerEmail,
}: CheckoutSession) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: serviceName,
              description: `${serviceName} - Krizia Passariello Wellness`,
            },
            unit_amount: price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/cancelled`,
      metadata: {
        serviceId,
      },
    });

    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}

export async function getCheckoutSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    throw error;
  }
}

// Service price mapping
export const servicePrices: Record<string, number> = {
  discovery: 0,
  nutrition: 199,
  dna: 299,
  peptide: 499,
  longevity: 799,
  biomarker: 299,
  biohacking: 249,
};

export default stripe;

