import "@/app/globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import type React from "react"
import { fontClasses } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Nutrix - Más que suplementos",
  description:
    "Experiencia de bienestar premium para quienes exigen calidad, innovación y exclusividad en cada aspecto de su vida.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontClasses}>
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
      </head>
      <body className="font-sans">
        {children}
        <elevenlabs-convai agent-id="f6EIYyqA7cHONUNOig5G"></elevenlabs-convai>
        <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
