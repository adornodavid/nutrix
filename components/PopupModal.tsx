"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkPopupStatus = () => {
      const hasSeenPopup = localStorage.getItem("hasSeenPopup")
      if (!hasSeenPopup) {
        setIsOpen(true)
        localStorage.setItem("hasSeenPopup", "true")
      }
    }

    // Pequeño retraso para asegurarnos de que el componente está montado
    const timer = setTimeout(checkPopupStatus, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-nutrix-white rounded-lg max-w-md w-full overflow-hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 text-nutrix-gray hover:text-nutrix-green z-10"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar</span>
        </button>

        <div className="relative aspect-square w-full">
          <Image
            src="/images/popup-tiendas.png"
            alt="Productos Nutrix disponibles en tiendas físicas y online"
            fill
            className="object-contain"
          />
        </div>

        <div className="p-4 text-center">
          <Button
            className="w-full bg-nutrix-green text-nutrix-white hover:bg-nutrix-blue hover:text-nutrix-white transition-colors text-sm font-bebas"
            onClick={() => setIsOpen(false)}
          >
            CERRAR
          </Button>
        </div>
      </div>
    </div>
  )
}
