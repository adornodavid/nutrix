import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import type React from "react"

// Usamos una sola fuente para simplificar
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Nutrix – Más que suplementos",
    template: "%s | Nutrix – Más que suplementos",
  },
  description:
    "Crudalitos es el suplemento ideal para recuperarte después de fiestas y desvelos. StayFit te ayuda a quemar grasa naturalmente. Suplementos keto, veganos y sin azúcar añadida.",
  authors: [{ name: "Nutrix México" }],
  generator: "Next.js",
  applicationName: "Nutrix",
  keywords: [
    "suplementos",
    "Crudalitos",
    "StayFit",
    "Cetolyte",
    "keto",
    "vegano",
    "sin azúcar",
    "recuperación",
    "quema grasa",
  ],
  creator: "Nutrix México",
  publisher: "Nutrix México",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nutrixmexico.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "verificación-google", // Reemplazar con tu código de verificación de Google
  },
  category: "health",
  other: {
    language: "es-MX",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-BZ05K0KXJE`} />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BZ05K0KXJE', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Cargar fuentes adicionales mediante CSS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Be+Vietnam+Pro:wght@400;500;700&family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        <elevenlabs-convai agent-id="f6EIYyqA7cHONUNOig5G"></elevenlabs-convai>
        <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
