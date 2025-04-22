"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-nutrix-white text-nutrix-dark">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-nutrix-dark text-nutrix-white overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Billionaire%20Boys_%20Club-aQo8eYRw3yWudLsZRCXsuXCjavnCmP.jpeg"
              alt="Vintage hero background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container px-4">
              <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">Una Tradición de Excelencia y Distinción</h1>
            </div>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Drawing%20parallels_%20Martin%20Parr%20pays%20tribute%20to%20Tony%20Ray-Jones-pIh79SAwt7MMedLiGc5B7KlMaSdCWj.jpeg"
                  alt="Nuestra Historia"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Desde nuestros inicios, Nutrix ha estado comprometida con la excelencia y la innovación en el campo
                  del bienestar. Nuestra historia está marcada por la búsqueda incansable de la perfección y el
                  compromiso con la calidad.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Cada producto que desarrollamos es el resultado de años de investigación y un profundo entendimiento
                  de las necesidades de aquellos que buscan lo mejor para su salud y bienestar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-24 bg-nutrix-dark text-nutrix-white">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Nuestros Valores</h2>
              <p className="text-xl max-w-3xl mx-auto">
                Los principios que guían cada decisión y cada producto que creamos.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-4">Excelencia</h3>
                <p className="text-lg">Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos.</p>
              </div>
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-4">Innovación</h3>
                <p className="text-lg">Constantemente buscamos nuevas formas de mejorar y evolucionar.</p>
              </div>
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-4">Integridad</h3>
                <p className="text-lg">Mantenemos los más altos estándares éticos en todas nuestras operaciones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Gallery */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">El Estilo de Vida Nutrix</h2>
              <p className="text-xl max-w-3xl mx-auto text-nutrix-dark/80">
                Una celebración de la elegancia atemporal y el bienestar moderno.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative aspect-square overflow-hidden group">
                <Image
                  src="https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/50%20Fascinating%20Candid%20Behind%20the%20Scenes%20Photos%20From%20the%201950s%20and%201960s%20Taken%20by%20Bob%20Willoughby-UcP0jmIGWxlmw2xgU9IkUrKa8MgaiR.jpeg"
                  alt="Lifestyle 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative aspect-square overflow-hidden group">
                <Image
                  src="https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Classic%20car-D7BpgHlKYQW9U0XTlzZ7k7fgk7zzR1.jpeg"
                  alt="Lifestyle 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative aspect-square overflow-hidden group">
                <Image
                  src="https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Coffee%20newspaper%20🗞️☕️-GU8tP27BNsri05LKBcWiSPUdZtcUeH.jpeg"
                  alt="Lifestyle 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-nutrix-dark text-nutrix-white">
          <div className="container px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Únete a la Experiencia Nutrix</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Descubre cómo nuestros productos pueden elevar tu estilo de vida y bienestar.
            </p>
            <Link href="/#productos">
              <Button
                size="lg"
                className="bg-nutrix-beige text-nutrix-dark hover:bg-nutrix-white hover:text-nutrix-dark transition-colors px-8 py-6 text-lg"
              >
                Explorar Productos
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t bg-nutrix-dark text-nutrix-white py-8">
        <div className="container px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Nutrix. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
