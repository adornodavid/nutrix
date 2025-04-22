"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface MercadoLibreProduct {
  id: string
  title: string
  price: number
  currency_id: string
  available_quantity: number
  thumbnail: string
  permalink: string
}

export function MercadoLibreProduct() {
  const [product, setProduct] = useState<MercadoLibreProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://api.mercadolibre.com/items/MLM2236729937")
        if (!response.ok) {
          throw new Error("Failed to fetch product data")
        }
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError("Error al cargar el producto. Por favor, intenta de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>
  }

  if (!product) {
    return null
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={product.thumbnail || "/placeholder.svg"}
            alt={product.title}
            width={200}
            height={200}
            className="h-48 w-full object-cover md:w-48"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Disponible: {product.available_quantity}
          </div>
          <h2 className="mt-1 text-2xl font-medium leading-tight text-gray-900">{product.title}</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {product.price.toLocaleString("es-MX", { style: "currency", currency: product.currency_id })}
          </p>
          <div className="mt-4 flex space-x-2">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open(product.permalink, "_blank")}
            >
              Comprar ahora
            </Button>
            <Button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
              onClick={() => window.open(product.permalink, "_blank")}
            >
              Ver en Mercado Libre
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
