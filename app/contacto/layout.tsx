import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Contáctanos – Nutrix",
  description: "Estamos para ayudarte. Escríbenos por WhatsApp o redes sociales.",
  openGraph: {
    title: "Contáctanos – Nutrix",
    description: "Estamos para ayudarte. Escríbenos por WhatsApp o redes sociales.",
    url: "/contacto",
    siteName: "Nutrix México",
    locale: "es_MX",
    type: "website",
  },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
