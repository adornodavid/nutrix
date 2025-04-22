"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  priceId: string // Añadimos el priceId para enviarlo a Stripe
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            priceId: item.priceId,
            quantity: item.quantity,
          })),
        }),
      })

      const data = await response.json()

      if (response.ok && data.url) {
        router.push(data.url)
      } else {
        throw new Error(data.error || "No se pudo crear la sesión de pago")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-nutrix-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Resumen del Pedido</h1>
        {cartItems.length === 0 ? (
          <p className="text-xl">No hay productos en el carrito.</p>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between border-b pb-4">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-2xl font-bold">Total:</p>
              <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
            </div>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                <p>{error}</p>
              </div>
            )}
            <Button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-nutrix-beige text-nutrix-dark hover:bg-nutrix-white hover:text-nutrix-dark transition-colors"
            >
              {isLoading ? "Procesando..." : "Pagar con Stripe"}
            </Button>
          </>
        )}
      </main>
    </div>
  )
}
