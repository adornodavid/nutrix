"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactoPage() {
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

  return (
    <div className="min-h-screen bg-nutrix-white">
      <Header />
      <main className="py-24 bg-nutrix-cream">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bebas tracking-tighter sm:text-4xl md:text-5xl text-nutrix-green">
                CONTÁCTANOS
              </h1>
              <p className="mt-4 text-nutrix-gray md:text-lg font-vietnam">
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
              {submitStatus === "success" && <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center">
                  Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
