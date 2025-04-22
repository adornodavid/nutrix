"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"

const product = {
  id: "prod_RlesDnqv6DAsXg",
  name: "Crudalitos",
  description: "Suplemento para la Resaca y Detoxificación",
  price: "$549.00 Pesos Mexicanos",
  longDescription:
    "Crudalitos es un suplemento diseñado para aliviar los síntomas de la resaca y apoyar la detoxificación del cuerpo después del consumo de alcohol o una noche de desvelo. Su fórmula avanzada ayuda a reponer electrolitos, mejorar la hidratación y restaurar los nutrientes esenciales para que te sientas mejor rápidamente.",
  keyFeatures: [
    "Alivio rápido del malestar post-alcohol",
    "Rehidratación efectiva con electrolitos esenciales",
    "Apoyo hepático y antioxidante para detoxificación",
    "Cápsulas de origen vegetal, sin colorantes ni conservadores",
  ],
  benefits: [
    "Reduce los síntomas de la resaca (dolor de cabeza, fatiga, náuseas)",
    "Repone electrolitos y mejora la hidratación",
    "Aporta energía y ayuda a la recuperación",
    "Protección hepática y antioxidante",
    "Mejora la calidad del sueño después del consumo de alcohol",
  ],
  ingredients: [
    "Citrato de Magnesio, Potasio y Calcio → Restauran electrolitos perdidos y rehidratan el cuerpo",
    "Extracto de Té Verde y Cafeína → Aportan energía y aceleran la eliminación de toxinas",
    "Extracto de Cardo Mariano → Protege el hígado y ayuda en la detoxificación",
    "Vitaminas B1, B3, B6, B12 y C → Restauran los niveles de vitaminas afectadas por el alcohol",
    "Resveratrol y Vitamina E → Antioxidantes que reducen el daño celular causado por el alcohol",
  ],
  presentation: "Frasco con 90 cápsulas (20 porciones)",
  usage: "Dosis recomendada: Tomar 3 cápsulas el día siguiente a una resaca o desvelo",
  idealFor: [
    "Personas que consumieron alcohol y quieren evitar la resaca",
    "Quienes tuvieron una noche de desvelo y necesitan energía",
    "Trabajadores con turnos intensos que requieren rápida recuperación",
  ],
  contraindications: "No consumir en caso de sensibilidad a algún ingrediente.",
  image: "/images/crudalitos-flyer.png",
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
}

export default function CrudalitosPage() {
  const handleBuyNow = () => {
    window.open("https://buy.stripe.com/9AQaIr5PP0qFevSfYY", "_blank")
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
            <h1 className="text-3xl font-bebas mb-4 text-nutrix-green">{product.name}</h1>
            <p className="text-xl font-bebas mb-2 text-nutrix-gray">{product.description}</p>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.longDescription}</p>

            {/* Precio y primer botón de compra */}
            <p className="text-2xl font-bebas mb-4 text-nutrix-green">Precio: {product.price}</p>
            <div className="mb-8">
              <Button
                className="w-full bg-nutrix-green text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors"
                onClick={handleBuyNow}
              >
                Comprar ahora
              </Button>
            </div>

            <h2 className="text-2xl font-bebas mt-8 mb-2 text-nutrix-green">CARACTERÍSTICAS PRINCIPALES:</h2>
            <ul className="list-disc pl-5 mb-6 font-vietnam text-nutrix-gray">
              {product.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-green">BENEFICIOS:</h2>
            <ul className="list-disc pl-5 mb-6 font-vietnam text-nutrix-gray">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-green">INGREDIENTES PRINCIPALES:</h2>
            <ul className="list-disc pl-5 mb-6 font-vietnam text-nutrix-gray">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-green">PRESENTACIÓN:</h2>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.presentation}</p>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-green">MODO DE USO:</h2>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.usage}</p>

            {/* Segundo botón de compra */}
            <p className="text-2xl font-bebas mb-4 text-nutrix-green">Precio: {product.price}</p>
            <div className="mb-8">
              <Button
                className="w-full bg-nutrix-green text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors"
                onClick={handleBuyNow}
              >
                Comprar ahora
              </Button>
            </div>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-green">IDEAL PARA:</h2>
            <ul className="list-disc pl-5 mb-6 font-vietnam text-nutrix-gray">
              {product.idealFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas mb-2 text-nutrix-green">CONTRAINDICACIONES:</h2>
            <p className="mb-6 font-vietnam text-nutrix-gray">{product.contraindications}</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bebas mb-6 text-nutrix-green">RESEÑAS DE CLIENTES</h2>
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
