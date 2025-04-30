import { Montserrat, Bebas_Neue, Be_Vietnam_Pro } from "next/font/google"

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
})

export const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam",
  display: "swap",
})

// Clase combinada para facilitar el uso
export const fontClasses = `${montserrat.variable} ${bebasNeue.variable} ${beVietnam.variable}`
