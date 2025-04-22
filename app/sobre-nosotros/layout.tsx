import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Quiénes Somos – Nutrix",
  description: "Nutrix es una marca mexicana de suplementos naturales para una vida activa y saludable.",
  openGraph: {
    title: "Quiénes Somos – Nutrix",
    description: "Nutrix es una marca mexicana de suplementos naturales para una vida activa y saludable.",
    url: "/sobre-nosotros",
    siteName: "Nutrix México",
    locale: "es_MX",
    type: "website",
  },
}

export default function SobreNosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
