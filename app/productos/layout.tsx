import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Nuestros Productos – Nutrix",
  description: "Conoce Crudalitos y StayFit, suplementos para recuperación y quema de grasa.",
  openGraph: {
    title: "Nuestros Productos – Nutrix",
    description: "Conoce Crudalitos y StayFit, suplementos para recuperación y quema de grasa.",
    url: "/productos",
    siteName: "Nutrix México",
    locale: "es_MX",
    type: "website",
  },
}

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
