import type { Metadata } from "next"
import type React from "react"

// Definimos los productos y sus metadatos
const productMetadata = {
  crudalitos: {
    title: "Crudalitos – Recuperación rápida y efectiva",
    description:
      "Suplemento para recuperarte después de fiestas y desvelos. Alivia síntomas de resaca y mejora tu bienestar.",
  },
  stayfit: {
    title: "StayFit – Control de peso y energía",
    description: "Suplemento termogénico para quemar grasa, controlar el apetito y aumentar tu energía durante el día.",
  },
  cetolyte: {
    title: "Cetolyte – Hidratación y electrolitos",
    description:
      "Bebida hidratante con electrolitos esenciales para reponer minerales y mantener el equilibrio hídrico del cuerpo.",
  },
}

// Generamos los metadatos dinámicamente basados en el slug del producto
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const slug = params.slug
  const product = productMetadata[slug as keyof typeof productMetadata] || {
    title: "Producto – Nutrix",
    description: "Suplementos premium para una vida activa y saludable.",
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `/productos/${slug}`,
      siteName: "Nutrix México",
      locale: "es_MX",
      type: "product",
    },
  }
}

export default function ProductoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
