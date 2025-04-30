"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Star } from "lucide-react"

interface Review {
  name: string
  product: string
  comment: string
  rating: number
}

const reviews: Review[] = [
  {
    name: "Ana Martínez",
    product: "Crudalitos",
    comment:
      "Después de una noche de fiesta, Crudalitos fue mi salvación. En 30 minutos noté alivio en la náusea y el dolor de cabeza. Me encanta que no tiene azúcar ni gluten. ¡Lo recomiendo!",
    rating: 4,
  },
  {
    name: "Javier Mendoza",
    product: "StayFit",
    comment:
      "Lo uso antes de entrenar y noto más resistencia. Me ayuda a controlar el apetito y quemé 3 kg en un mes. Solo me dio un poco de ansiedad al principio.",
    rating: 4,
  },
  {
    name: "Lucía Fernández",
    product: "Cetolyte",
    comment:
      "Lo uso después de correr maratones. Recupero electrolitos al instante y evito calambres. ¡El sabor es neutro y no tiene azúcar!",
    rating: 5,
  },
  {
    name: "Carlos Ríos",
    product: "Crudalitos",
    comment:
      "Siempre lo llevo en mi mochila. Las cápsulas son fáciles de tomar y me ayudan a recuperar energía después de salir. Solo desearía que el efecto durara un poco más.",
    rating: 4,
  },
  {
    name: "Valeria Soto",
    product: "StayFit",
    comment:
      "Perfecto para mi estilo de vida ocupado. Me da energía sin cafeína excesiva y evito antojos de dulces. ¡Mi favorito para mantenerme en forma!",
    rating: 5,
  },
  {
    name: "Andrés Ramírez",
    product: "Cetolyte",
    comment:
      "Trabajo en construcción y el calor me deshidrata. Cetolyte me mantiene activo todo el día. Lo único: el polvo a veces no se disuelve del todo.",
    rating: 4,
  },
  {
    name: "Sofía Guevara",
    product: "Crudalitos",
    comment:
      "¡Funciona! Tomé 3 cápsulas al despertar y pude ir al trabajo sin problemas. Me gusta que no tiene conservantes. Ideal para quienes no quieren perder el día por una resaca.",
    rating: 5,
  },
  {
    name: "Diego Herrera",
    product: "StayFit",
    comment:
      "Buen suplemento, pero el sabor de las cápsulas es un poco fuerte. Aun así, me ayudó a definir músculo y reducir grasa abdominal.",
    rating: 4,
  },
  {
    name: "Mariana Cruz",
    product: "Cetolyte",
    comment:
      "Me salvó durante una gastroenteritis. Lo mezclo con jugo y evito la deshidratación. ¡Esencial en mi botiquín!",
    rating: 5,
  },
]

export const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const moveCarousel = useCallback(() => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
      setIsAnimating(false)
    }, 500) // Duración de la animación
  }, [])

  useEffect(() => {
    const interval = setInterval(moveCarousel, 5000) // Cambia cada 5 segundos
    return () => clearInterval(interval)
  }, [moveCarousel])

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ]

  return (
    <div className="overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          isAnimating ? "-translate-x-1/3" : "translate-x-0"
        }`}
        style={{ width: "150%" }}
      >
        {visibleReviews.map((review, index) => (
          <div key={index} className="w-1/3 px-3">
            <div className="bg-nutrix-gray rounded-lg p-6 shadow-lg text-nutrix-white flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-nutrix-green" />
                  <div>
                    <div className="font-bebas text-nutrix-white">{review.name}</div>
                    <div className="text-sm text-nutrix-white font-vietnam">Producto: {review.product}</div>
                  </div>
                </div>
                <p className="text-nutrix-white mb-4 font-vietnam">{review.comment}</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating ? "fill-nutrix-orange text-nutrix-orange" : "fill-none text-nutrix-orange"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
