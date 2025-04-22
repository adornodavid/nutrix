"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { addToCart, getCart } from "@/lib/cart"
import Link from "next/link"

const testProducts = [
  { id: "prod_1", priceId: "price_1", name: "Producto 1", price: 10 },
  { id: "prod_2", priceId: "price_2", name: "Producto 2", price: 20 },
  { id: "prod_3", priceId: "price_3", name: "Producto 3", price: 30 },
]

export default function TestCartPage() {
  const [cartItems, setCartItems] = useState(getCart())

  const handleAddToCart = (product: (typeof testProducts)[0]) => {
    addToCart(product.id, product.priceId, 1, product.name, product.price)
    setCartItems(getCart())
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Página de prueba del carrito</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {testProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="font-bold">{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <Button onClick={() => handleAddToCart(product)}>Añadir al carrito</Button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Carrito actual:</h2>
        {cartItems.map((item) => (
          <div key={item.productId}>
            {item.name} - Cantidad: {item.quantity}
          </div>
        ))}
      </div>
      <Link href="/cart">
        <Button>Ir al carrito</Button>
      </Link>
    </div>
  )
}
