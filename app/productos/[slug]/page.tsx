"use client"

import Image from "next/image"
import { notFound } from "next/navigation"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"
import Link from "next/link"

const products = [
  {
    slug: "crudalitos",
    name: "Crudalitos",
    description: "Recuperación rápida y efectiva para después de tus celebraciones.",
    longDescription:
      "Crudalitos es tu aliado perfecto para una recuperación rápida después de esas noches de celebración. Nuestra fórmula única combina electrolitos esenciales, vitaminas del complejo B y antioxidantes para ayudarte a sentirte renovado y listo para enfrentar el día.",
    benefits: [
      "Alivia los síntomas de la resaca",
      "Rehidrata y revitaliza el cuerpo",
      "Mejora la claridad mental",
      "Fórmula con electrolitos y antioxidantes",
      "Efecto rápido en pocas horas",
      "Sabor refrescante y fácil de tomar",
    ],
    ingredients: [
      "Complejo de electrolitos",
      "Vitaminas del grupo B",
      "N-acetil cisteína",
      "Extracto de cardo mariano",
      "Ginkgo biloba",
    ],
    presentation: "Frasco con 90 cápsulas (30 porciones)",
    image:
      "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20producto/Crudalitos%20Render%20Fondo%20Blanco-nBAY3InZZzaob4yGedKg31Zkk1rcZZ",
    reviews: [
      {
        name: "Ana Martínez",
        comment:
          "Después de una noche de fiesta, Crudalitos fue mi salvación. En 30 minutos noté alivio en la náusea y el dolor de cabeza. Me encanta que no tiene azúcar ni gluten. ¡Lo recomiendo!",
        rating: 4,
      },
      {
        name: "Carlos Ríos",
        comment:
          "Siempre lo llevo en mi mochila. Las cápsulas son fáciles de tomar y me ayudan a recuperar energía después de salir. Solo desearía que el efecto durara un poco más.",
        rating: 4,
      },
      {
        name: "Sofía Guevara",
        comment:
          "¡Funciona! Tomé 3 cápsulas al despertar y pude ir al trabajo sin problemas. Me gusta que no tiene conservantes. Ideal para quienes no quieren perder el día por una resaca.",
        rating: 5,
      },
    ],
  },
  {
    slug: "stayfit",
    name: "StayFit",
    description: "Control de peso y energía para un estilo de vida activo.",
    longDescription:
      "StayFit es tu compañero ideal para alcanzar y mantener tu peso ideal. Nuestra fórmula avanzada combina ingredientes naturales que ayudan a acelerar el metabolismo, controlar el apetito y aumentar los niveles de energía, todo lo que necesitas para un estilo de vida activo y saludable.",
    benefits: [
      "Acelera el metabolismo",
      "Controla el apetito",
      "Aumenta la energía",
      "Promueve la quema de grasa",
      "Ingredientes 100% naturales",
      "Ideal para complementar tu rutina de ejercicios",
    ],
    ingredients: ["Extracto de té verde", "L-carnitina", "Cafeína natural", "Garcinia cambogia", "Cromo picolinato"],
    presentation: "Envase de 30 sobres",
    image:
      "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20producto/StayFit%20Render%20Blanco-Ms1mmIlwHFqw6j24xywNNlLUzoaVsy",
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
  },
  {
    slug: "cetolyte",
    name: "Cetolyte",
    description: "Bienestar integral para tu día a día.",
    longDescription:
      "Cetolyte es tu solución integral para un bienestar óptimo. Nuestra fórmula única está diseñada para apoyar tu estilo de vida cetogénico, proporcionando energía sostenida, mejorando la claridad mental y promoviendo un metabolismo saludable.",
    benefits: [
      "Apoya el estilo de vida cetogénico",
      "Proporciona energía sostenida",
      "Mejora la claridad mental",
      "Promueve un metabolismo saludable",
      "Ayuda en la gestión del peso",
      "Fórmula balanceada de grasas saludables",
    ],
    ingredients: [
      "MCT (Triglicéridos de Cadena Media)",
      "BHB (Beta-hidroxibutirato)",
      "Electrolitos esenciales",
      "Vitamina D",
      "Magnesio",
    ],
    presentation: "Envase de 60 cápsulas",
    image:
      "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20producto/Cetolyte%20Render-AvQGOjDz03eQ0TC0REiLJ7qDG1buFT",
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
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-nutrix-white text-nutrix-dark">
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
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="mb-6">{product.longDescription}</p>

            <h2 className="text-2xl font-semibold mb-2">Beneficios:</h2>
            <ul className="list-disc pl-5 mb-6">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Ingredientes principales:</h2>
            <ul className="list-disc pl-5 mb-6">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Presentación:</h2>
            <p className="mb-6">{product.presentation}</p>

            <div className="flex space-x-4">
              <Button className="flex-1 bg-nutrix-beige text-nutrix-dark hover:bg-nutrix-white hover:text-nutrix-dark transition-colors">
                Comprar ahora
              </Button>
              <Link href="/#contacto" className="flex-1">
                <Button className="w-full bg-nutrix-dark text-nutrix-white hover:bg-nutrix-beige hover:text-nutrix-dark transition-colors">
                  Más información
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Reseñas de clientes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-nutrix-dark p-4 rounded-lg text-nutrix-white">
                <div className="flex items-center mb-2">
                  <div className="font-semibold mr-2">{review.name}</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? "fill-amber-500 text-amber-500" : "fill-none text-amber-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
