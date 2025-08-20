import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      throw new Error("Missing STRIPE_SECRET_KEY");
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    const body = await req.json().catch(() => ({}));
    const amount = Number(body.amount);
    const currency = (body.currency || "BRL").toString().toLowerCase();
    const productName = (body.productName || "Compra única").toString();
    const successUrl = (body.successUrl || `${req.headers.get("origin")}/payment-success`).toString();
    const cancelUrl = (body.cancelUrl || `${req.headers.get("origin")}/payment-canceled`).toString();
    const email = body.email ? String(body.email) : undefined;

    if (!amount || amount < 100) {
      throw new Error("Invalid amount. Must be in cents (e.g., 16700 for R$ 167,00)");
    }

    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency,
            product_data: { name: productName },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      automatic_tax: { enabled: false },
      automatic_payment_methods: { enabled: true },
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
