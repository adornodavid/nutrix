import { NextResponse } from "next/server"

export async function GET() {
  // Dominio base del sitio
  const baseUrl = "https://nutrixmexico.com"

  // Fecha actual en formato ISO para lastmod
  const currentDate = new Date().toISOString()

  // Rutas del sitio con sus prioridades
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/productos", priority: 0.8 },
    { path: "/productos/crudalitos", priority: 0.8 },
    { path: "/productos/stayfit", priority: 0.8 },
    { path: "/productos/cetolyte", priority: 0.8 },
    { path: "/contacto", priority: 0.8 },
    { path: "/sobre-nosotros", priority: 0.8 },
  ]

  // Generar el contenido XML del sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  // Devolver la respuesta con el tipo de contenido XML
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
