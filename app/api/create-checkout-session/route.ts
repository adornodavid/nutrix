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
    const { items } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid or empty items array" }, { status: 400 })
    }

    // Validar cada item en el array
    for (const item of items) {
      if (!item.priceId || typeof item.quantity !== "number" || item.quantity <= 0) {
        return NextResponse.json({ error: "Invalid item data" }, { status: 400 })
      }
    }

    // Asegurarse de que la URL de origen sea válida
    const origin = request.headers.get("origin") || "https://nutrixmexico.vercel.app"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price: item.priceId,
        quantity: item.quantity,
      })),
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
