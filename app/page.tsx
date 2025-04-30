"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { ReviewCarousel } from "@/components/ReviewCarousel"
import { PopupModal } from "@/components/PopupModal"

export default function Home() {
  const beneficiosRef = useRef<HTMLElement>(null)
  const productosRef = useRef<HTMLElement>(null)
  const testimoniosRef = useRef<HTMLElement>(null)
  const contactoRef = useRef<HTMLElement>(null)
  const lifestyleRef = useRef<HTMLElement>(null)

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    whatsapp: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      console.log("Enviando datos:", formData)

      const response = await fetch("https://hook.us2.make.com/etq6nd9xvlfhb7zfr7tjmup58xtns714", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          nombre: formData.nombre.trim(),
          correo: formData.correo.trim(),
          whatsapp: formData.whatsapp.trim(),
          mensaje: formData.mensaje.trim(),
        }),
      })

      console.log("Respuesta del servidor:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      setSubmitStatus("success")
      setFormData({ nombre: "", correo: "", whatsapp: "", mensaje: "" })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (section: string) => {
    const refs = {
      productos: productosRef,
      beneficios: beneficiosRef,
      testimonios: testimoniosRef,
      contacto: contactoRef,
      lifestyle: lifestyleRef,
    }

    const ref = refs[section as keyof typeof refs]
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  const benefits = [
    {
      title: "Ingredientes de Alta Calidad",
      description:
        "Utilizamos solo los mejores ingredientes, cuidadosamente seleccionados y probados para garantizar la máxima eficacia.",
    },
    {
      title: "Fórmulas Científicamente Probadas",
      description:
        "Nuestros suplementos están respaldados por investigaciones científicas y estudios clínicos para asegurar resultados reales.",
    },
    {
      title: "Mejora del Rendimiento",
      description:
        "Diseñados para optimizar tu rendimiento físico y mental, ayudándote a alcanzar tus metas de salud y fitness.",
    },
    {
      title: "Sin Aditivos Artificiales",
      description:
        "Nuestros productos están libres de colorantes, saborizantes y conservantes artificiales, garantizando una nutrición pura.",
    },
    {
      title: "Apoyo al Bienestar Integral",
      description:
        "Nuestros suplementos están diseñados para apoyar no solo la salud física, sino también el bienestar mental y emocional.",
    },
    {
      title: "Fabricación de Calidad",
      description:
        "Producidos en instalaciones certificadas bajo estrictos estándares de calidad para garantizar la pureza y potencia de cada producto.",
    },
  ]

  return (
    <div className="min-h-screen bg-nutrix-white text-nutrix-gray">
      <PopupModal />
      <Header onSectionClick={scrollToSection} isHomePage={true} />
      <main>
        {/* Hero Section Renovado */}
        <section className="relative bg-nutrix-dark text-nutrix-white overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/hero-productos.jpeg"
              alt="Productos Nutrix sobre césped"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative px-4 py-32 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bebas tracking-tight mb-8">MÁS QUE SUPLEMENTOS</h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed">
                Una experiencia de bienestar premium diseñada para quienes valoran la excelencia y la distinción en cada
                aspecto de su vida.
              </p>
              <Button
                size="lg"
                className="bg-nutrix-green text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors text-lg px-8 py-6"
                onClick={() => (window.location.href = "/sobre-nosotros")}
              >
                Descubre Nuestra Historia
              </Button>
            </div>
          </div>
        </section>

        {/* Nueva Sección Lifestyle sin Carousel */}
        <section id="lifestyle" ref={lifestyleRef} className="py-24 bg-nutrix-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bebas tracking-tight mb-6 text-nutrix-green">
                TU MEJOR ESTILO DE VIDA
              </h2>
              <p className="text-xl text-nutrix-gray/80 max-w-3xl mx-auto">
                Nutrix representa la fusión perfecta entre la elegancia atemporal y el bienestar moderno. Cada producto
                es una invitación a experimentar lo extraordinario.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Productos Actualizada */}
        <section id="productos" ref={productosRef} className="py-24 bg-nutrix-dark">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bebas tracking-tight text-nutrix-white mb-6">
                NUESTRA COLECCIÓN PREMIUM
              </h2>
              <p className="text-xl text-nutrix-white/80 max-w-3xl mx-auto">
                Cada producto es el resultado de nuestra búsqueda incansable por la excelencia y la innovación.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Crudalitos */}
              <div className="bg-nutrix-gray rounded-lg p-6 shadow-lg flex flex-col h-full">
                <div className="h-[400px] relative mb-4">
                  <Image
                    src="/images/crudalitos-flyer.png"
                    alt="Crudalitos - Recuperate rápido y sin malestar"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <Link href="/productos/crudalitos" passHref className="mt-auto">
                  <Button className="w-full bg-nutrix-green text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors">
                    Más Información
                  </Button>
                </Link>
              </div>

              {/* StayFit */}
              <div className="bg-nutrix-gray rounded-lg p-6 shadow-lg flex flex-col h-full">
                <div className="h-[400px] relative mb-4">
                  <Image
                    src="/images/stayfit-flyer.png"
                    alt="StayFit - Transforma tu cuerpo, conquista tu día"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <Link href="/productos/stayfit" passHref className="mt-auto">
                  <Button className="w-full bg-nutrix-green text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors">
                    Más Información
                  </Button>
                </Link>
              </div>

              {/* Cetolyte */}
              <div className="bg-nutrix-gray rounded-lg p-6 shadow-lg flex flex-col h-full">
                <div className="h-[400px] relative mb-4">
                  <Image
                    src="/images/cetolyte-flyer.png"
                    alt="Cetolyte - Recarga, repone, revitaliza"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <Link href="/productos/cetolyte" passHref className="mt-auto">
                  <Button className="w-full bg-nutrix-green text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors">
                    Más Información
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" ref={beneficiosRef} className="py-24 bg-nutrix-cream text-nutrix-gray">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bebas tracking-tighter sm:text-4xl md:text-5xl text-nutrix-green">
                BENEFICIOS DE NUESTROS PRODUCTOS
              </h2>
              <p className="mt-4 md:text-lg">Descubre por qué somos la elección premium en suplementos</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-nutrix-white rounded-lg">
                  <h3 className="text-xl font-bebas mb-2 text-nutrix-green">{benefit.title}</h3>
                  <p className="text-nutrix-gray">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" ref={testimoniosRef} className="py-24 bg-nutrix-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bebas tracking-tighter sm:text-4xl md:text-5xl text-nutrix-green">
                LO QUE DICEN NUESTROS CLIENTES
              </h2>
              <p className="mt-4 text-nutrix-gray md:text-lg">Experiencias reales de personas que confían en Nutrix</p>
            </div>
            <ReviewCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" ref={contactoRef} className="py-24 bg-nutrix-cream">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bebas tracking-tighter sm:text-4xl md:text-5xl text-nutrix-green">
                  CONTÁCTANOS
                </h2>
                <p className="mt-4 text-nutrix-gray md:text-lg">
                  Estamos aquí para responder tus preguntas. Déjanos un mensaje y nos pondremos en contacto contigo
                  pronto.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-nutrix-gray">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-nutrix-gray"
                  />
                </div>
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium mb-2 text-nutrix-gray">
                    Correo
                  </label>
                  <Input
                    id="correo"
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-nutrix-gray"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-nutrix-gray">
                    WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-nutrix-gray"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-2 text-nutrix-gray">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    className="min-h-[100px] bg-white border-nutrix-gray"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-nutrix-green text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-center">
                    Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-nutrix-dark text-nutrix-white">
        <div className="container px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-bebas mb-4">NUTRIX</h3>
              <p className="text-sm">Transformando el bienestar con suplementos premium.</p>
            </div>
            <div>
              <h3 className="text-lg font-bebas mb-4">PRODUCTOS</h3>
              <ul className="space-y-2 text-sm">
                <li>Crudalitos</li>
                <li>StayFit</li>
                <li>Cetolyte</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bebas mb-4">ENLACES</h3>
              <ul className="space-y-2 text-sm">
                <li>Sobre Nosotros</li>
                <li>Beneficios</li>
                <li>Testimonios</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bebas mb-4">SÍGUENOS</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/nutrixmexico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-nutrix-white/10 flex items-center justify-center hover:bg-nutrix-green transition-colors"
                  aria-label="Instagram de Nutrix"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-nutrix-white/10 text-center text-sm">
            © {new Date().getFullYear()} Nutrix. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
