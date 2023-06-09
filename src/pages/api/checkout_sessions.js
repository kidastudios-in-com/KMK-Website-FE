const stripe = require('stripe')("sk_test_51NE58PSBuQnJr5tOptfOFvzvsbXBbQcecTRGAhtQXkynv9qaJn82kqVmZyUhLUW8gMWF4EzTRS12aOouuDEAUSiF00Yp4SkT8w");

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1NE5DPSBuQnJr5tOnimnWE85',
            // quantity: 1,
          },
        ],
        mode: 'subscription',
        
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}