"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const product = {
  name: "Cetolyte",
  description: "Bebida Hidratante con Electrolitos - 195 g",
  longDescription:
    "Cetolyte es una bebida hidratante a base de electrolitos esenciales, diseñada para reponer minerales perdidos y mantener el equilibrio hídrico del cuerpo. Ideal para deportistas, personas con turnos laborales demandantes y quienes buscan evitar la deshidratación después del ejercicio, enfermedad o consumo de alcohol.",
  benefits: [
    "Hidratación instantánea",
    "Sin azúcar ni rellenos",
    "Keto-friendly y sin gluten",
    "Apto para veganos",
    "Previene la deshidratación",
    "Restaura electrolitos esenciales",
    "Mejora el rendimiento físico y mental",
    "Evita calambres y fatiga muscular",
    "Apoya la concentración y claridad mental",
    "Ideal para la resaca y el jet lag",
    "Coadyuvante en infecciones con fiebre, diarrea o vómitos",
  ],
  ingredients: [
    "Electrolitos Esenciales: Potasio, Calcio, Magnesio, Sodio, Cloruro",
    "Oligoelementos: Zinc, Manganeso, Cromo, Selenio",
    "Fórmula libre de azúcar y carbohidratos",
  ],
  presentation: "195 g (30 porciones)",
  usage:
    "Disolver 1 medida al ras (6.5 g) en un vaso con 300 ml de agua. Mezclar bien y agregar hielos al gusto. Tomar una vez al día o según necesidad.",
  image: "/images/cetolyte-flyer.png",
  reviews: [
    {
      name: "Lucía Fernández",
      comment:
        "Lo uso después de correr maratones. Recupero electrolitos al instante y evito calambres. ¡El sabor es neutro y no tiene azúcar!",
      rating: 5,
    },
    {
      name: "Andrés Ramírez",
      comment:
        "Trabajo en construcción y el calor me deshidrata. Cetolyte me mantiene activo todo el día. Lo único: el polvo a veces no se disuelve del todo.",
      rating: 4,
    },
    {
      name: "Mariana Cruz",
      comment:
        "Me salvó durante una gastroenteritis. Lo mezclo con jugo y evito la deshidratación. ¡Esencial en mi botiquín!",
      rating: 5,
    },
  ],
}

export default function CetolytePage() {
  const handleBuyNow = () => {
    window.location.href = "https://buy.stripe.com/9AQaIr5PP0qFevSfYY"
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
            <h1 className="text-3xl font-bebas mb-4 text-nutrix-blue">{product.name}</h1>
            <p className="text-xl font-bebas mb-2 text-nutrix-gray">{product.description}</p>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.longDescription}</p>

            <h2 className="text-2xl font-bebas mt-8 mb-2 text-nutrix-blue">BENEFICIOS:</h2>
            <ul className="list-disc pl-5 mb-6 font-vietnam text-nutrix-gray">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-blue">INGREDIENTES PRINCIPALES:</h2>
            <ul className="list-disc pl-5 mb-6 font-vietnam text-nutrix-gray">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-blue">PRESENTACIÓN:</h2>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.presentation}</p>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-blue">MODO DE USO:</h2>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.usage}</p>

            <Link href="/#contacto">
              <Button className="w-full bg-nutrix-blue text-nutrix-white hover:bg-nutrix-green hover:text-nutrix-white transition-colors">
                Más información
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bebas mb-6 text-nutrix-blue">RESEÑAS DE CLIENTES</h2>
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
