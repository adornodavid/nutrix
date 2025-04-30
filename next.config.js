/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ueg9mrey4dlbouog.public.blob.vercel-storage.com", "v0.blob.com"],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  experimental: {
    // Habilitar características experimentales si las necesitas
    // appDir: true, // Ya no es necesario en Next.js 14+
  },
  // Configuración de seguridad recomendada
  poweredByHeader: false,
  // Optimizaciones de compilación
  compiler: {
    // Eliminar console.logs en producción
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },
  // Configuración de internacionalización si la necesitas
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
