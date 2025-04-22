"use client"

import type React from "react"

import { useState } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"

export function StripeCheckoutForm({ setIsCheckoutOpen }: { setIsCheckoutOpen: (isOpen: boolean) => void }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)

    const cardElement = elements.getElement(CardElement)

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      })

      if (error) {
        setError(error.message || "An error occurred")
        setProcessing(false)
      } else {
        // Aquí normalmente enviarías el paymentMethod.id a tu servidor
        console.log("Payment Method:", paymentMethod)
        setIsCheckoutOpen(false)
        // Mostrar mensaje de éxito o redirigir a una página de confirmación
      }
    }

    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <Button
        type="submit"
        disabled={!stripe || processing}
        className="mt-4 w-full bg-nutrix-beige text-nutrix-dark hover:bg-nutrix-white hover:text-nutrix-dark transition-colors"
      >
        {processing ? "Procesando..." : "Pagar"}
      </Button>
    </form>
  )
}
