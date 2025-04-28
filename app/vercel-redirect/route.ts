import { type NextRequest, NextResponse } from "next/server"

export function GET(request: NextRequest) {
  const host = request.headers.get("host") || ""

  // Verificar si el host contiene vercel.app
  if (host.includes("vercel.app")) {
    // Obtener la ruta actual
    const url = request.nextUrl.clone()
    const path = url.pathname
    const searchParams = url.search

    // Construir la URL de redirección
    const redirectUrl = `https://nutrixmexico.com${path}${searchParams}`

    // Redireccionar con código 301 (permanente)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Si no es un dominio de Vercel, continuar normalmente
  return new NextResponse("No redirect needed", { status: 200 })
}
