import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY_V2?.trim()

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY_V2 is not defined in the environment variables")
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16",
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { priceId, quantity } = body

    if (!priceId || !quantity) {
      return NextResponse.json({ error: "Missing priceId or quantity" }, { status: 400 })
    }

    // Asegurarse de que la URL de origen sea válida
    const origin = request.headers.get("origin") || "https://nutrixmexico.vercel.app"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${origin}/thank-you`,
      cancel_url: `${origin}/cart`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error("Stripe API error:", err)

    return NextResponse.json(
      {
        error: "Error creating Stripe session",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
