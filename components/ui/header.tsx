"use client"

import Link from "next/link"
import { Button } from "./button"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import { Menu } from "lucide-react"

interface HeaderProps {
  onSectionClick?: (section: string) => void
  isHomePage?: boolean
}

export function Header({ onSectionClick, isHomePage = false }: HeaderProps) {
  const handleNavigation = (section: string) => {
    if (isHomePage && onSectionClick) {
      onSectionClick(section)
    } else {
      window.location.href = `/#${section}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-nutrix-white/95 backdrop-blur supports-[backdrop-filter]:bg-nutrix-white/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="text-2xl font-bold text-nutrix-gray tracking-widest">
          N U T R I X
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 ml-auto">
          <button
            onClick={() => handleNavigation("productos")}
            className="text-sm font-medium text-nutrix-gray hover:text-nutrix-green transition-colors"
          >
            Productos
          </button>
          <Link
            href="/sobre-nosotros"
            className="text-sm font-medium text-nutrix-gray hover:text-nutrix-green transition-colors"
          >
            Sobre Nosotros
          </Link>
          <button
            onClick={() => handleNavigation("beneficios")}
            className="text-sm font-medium text-nutrix-gray hover:text-nutrix-green transition-colors"
          >
            Beneficios
          </button>
          <button
            onClick={() => handleNavigation("testimonios")}
            className="text-sm font-medium text-nutrix-gray hover:text-nutrix-green transition-colors"
          >
            Testimonios
          </button>
          <button
            onClick={() => handleNavigation("contacto")}
            className="text-sm font-medium text-nutrix-gray hover:text-nutrix-green transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => handleNavigation("productos")}
                  className="text-lg font-medium text-nutrix-gray hover:text-nutrix-green transition-colors text-left"
                >
                  Productos
                </button>
                <Link
                  href="/sobre-nosotros"
                  className="text-lg font-medium text-nutrix-gray hover:text-nutrix-green transition-colors"
                >
                  Sobre Nosotros
                </Link>
                <button
                  onClick={() => handleNavigation("beneficios")}
                  className="text-lg font-medium text-nutrix-gray hover:text-nutrix-green transition-colors text-left"
                >
                  Beneficios
                </button>
                <button
                  onClick={() => handleNavigation("testimonios")}
                  className="text-lg font-medium text-nutrix-gray hover:text-nutrix-green transition-colors text-left"
                >
                  Testimonios
                </button>
                <button
                  onClick={() => handleNavigation("contacto")}
                  className="text-lg font-medium text-nutrix-gray hover:text-nutrix-green transition-colors text-left"
                >
                  Contacto
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
