"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"

const product = {
  name: "StayFit",
  description: "Suplemento Termogénico Quemagrasa",
  price: "$549.00 Pesos Mexicanos",
  longDescription:
    "StayFit es un suplemento termogénico diseñado para acelerar el metabolismo, aumentar la quema de grasa y mejorar el rendimiento físico. Su fórmula combina ingredientes naturales que potencian la conversión de grasa en energía, brindando vitalidad y resistencia durante todo el día.",
  benefits: [
    "Acelera la quema de grasa",
    "Aumenta la energía y el rendimiento",
    "Controla el apetito y los antojos",
    "Ingredientes naturales sin aditivos",
    "Favorece la pérdida de peso de forma natural",
    "Aporta energía extra para entrenamientos",
    "Regula los niveles de azúcar en sangre",
    "Reduce la retención de líquidos",
    "Mejora la resistencia y la recuperación muscular",
  ],
  ingredients: [
    "L-Carnitina",
    "Cetonas de Frambuesa",
    "Extracto de Guaraná",
    "Jengibre y Té Verde",
    "Extracto de Gymnema",
    "Cola de Caballo",
    "Vitamina B3 y Cromo",
  ],
  presentation: "Frasco con 90 cápsulas (30 porciones)",
  usage: "Dosis recomendada: 3 cápsulas al día con agua después del desayuno",
  image: "/images/stayfit-flyer.png",
  reviews: [
    {
      name: "Javier Mendoza",
      comment:
        "Lo uso antes de entrenar y noto más resistencia. Me ayuda a controlar el apetito y quemé 3 kg en un mes. Solo me dio un poco de ansiedad al principio.",
      rating: 4,
    },
    {
      name: "Valeria Soto",
      comment:
        "Perfecto para mi estilo de vida ocupado. Me da energía sin cafeína excesiva y evito antojos de dulces. ¡Mi favorito para mantenerme en forma!",
      rating: 5,
    },
    {
      name: "Diego Herrera",
      comment:
        "Buen suplemento, pero el sabor de las cápsulas es un poco fuerte. Aun así, me ayudó a definir músculo y reducir grasa abdominal.",
      rating: 4,
    },
  ],
}

export default function StayFitPage() {
  const handleBuyNow = () => {
    window.open("https://buy.stripe.com/14keYHba9ddrfzW6op", "_blank")
  }

  return (
    <div className="min-h-screen bg-nutrix-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="relative aspect-square mb-4">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bebas mb-4 text-nutrix-red">{product.name}</h1>
            <p className="text-xl font-bebas mb-2 text-nutrix-gray">{product.description}</p>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.longDescription}</p>

            {/* Precio y primer botón de compra */}
            <p className="text-2xl font-bebas mb-4 text-nutrix-red">Precio: {product.price}</p>
            <div className="mb-8">
              <Button
                className="w-full bg-nutrix-red text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors"
                onClick={handleBuyNow}
              >
                Comprar ahora
              </Button>
            </div>

            <h2 className="text-2xl font-bebas mt-8 mb-2 text-nutrix-red">BENEFICIOS:</h2>
            <ul className="list-disc pl-5 mb-6 font-vietnam text-nutrix-gray">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-red">INGREDIENTES PRINCIPALES:</h2>
            <ul className="list-disc pl-5 mb-6 font-vietnam text-nutrix-gray">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-red">PRESENTACIÓN:</h2>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.presentation}</p>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-red">MODO DE USO:</h2>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.usage}</p>

            {/* Segundo botón de compra */}
            <p className="text-2xl font-bebas mb-4 text-nutrix-red">Precio: {product.price}</p>
            <div className="mb-8">
              <Button
                className="w-full bg-nutrix-red text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors"
                onClick={handleBuyNow}
              >
                Comprar ahora
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bebas mb-6 text-nutrix-red">RESEÑAS DE CLIENTES</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-nutrix-cream p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="font-bebas mr-2 text-nutrix-gray">{review.name}</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? "fill-nutrix-orange text-nutrix-orange" : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="font-vietnam text-nutrix-gray">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
