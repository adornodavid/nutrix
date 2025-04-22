"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Google%20Images-lCuwH48f7PYoh9v9w4F2lXMUpdmDs6.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Here,%20here,%20a%20Tumblr%20dedicated%20entirely%20to%20Vintage%20French%20Photos%20you%20probably%20Haven_t%20Seen-FYsF4f6v4Gz7jvcUKAm7gsaxFCchq2.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Is%20Dro%CC%82le%20de%20Monsieur%20For%20AS%20Monaco%20the%20Best%20Football%20Collab%20Yet_-lmxsTJtEUymhHQW2sQaJwRXeDOr80p.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Kees%20Scherer,%20Milan,%20Italy,%201963-geI0OJErePMoq53zBJZyZAQp2AOkT6.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/New%20York%20City%20in%20all%20its%20Neon-Lit%20Glory,%201969%20-%201971%20-%20Flashbak-SGjrWoLFAMUNkANggXj8rO57ki0GoK.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Rare%20Photos%20of%20Willie%20Mays-awBAuFjtPrCGmwEdHq2olQvbCevVw5.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Tennis_s%2025%20Most%20Stylish%20Men-2rmZfF0hosBrlWgKLSBLnb49z9s1S2.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Thelma%20and%20Louise%20Amalfi%20Coast%20version%20%F0%9F%92%AB%E2%80%A6-g5JfEmjRw8vcp3joRynWdB06BCY6MR.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/These%20Photos%20of%20Famous%20People%20Drinking%20Beer%20and%20Enjoying%20Life%20Will%20Get%20You%20to%20the%20Weekend-rC855XRi5C2Bz1ItWJh92rKAIrVaga.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/TodayInSports%20on%20X-eGiym4UbygeqfKeUoLYUBRYTTMys8m.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/Vintage%20Ralph%20-%20Ivy%20Style-JcuHEhZtYFMhFJUtnIv34hYcOackbN.jpeg",
  "https://ueg9mrey4dlbouog.public.blob.vercel-storage.com/Nutrix/Imagenes%20Vintage/The%20Joy%20of%20Drinking_%20Vintage%20Photos%20of%20People%20Having%20a%20Good%20Time%20With%20Alcohol-rI8pPYqIC2C5vLYIp23gVjJpxiKVff.jpeg",
]

export const VintageImageCarousel: React.FC = () => {
  const [currentImages, setCurrentImages] = useState(images.slice(0, 4))
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true)
      setTimeout(() => {
        setCurrentImages((prevImages) => {
          const newImages = [...prevImages]
          const randomIndex = Math.floor(Math.random() * images.length)
          const randomPosition = Math.floor(Math.random() * 4)
          newImages[randomPosition] = images[randomIndex]
          return newImages
        })
        setFadeOut(false)
      }, 500) // Half of the transition time
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
      {currentImages.map((src, index) => (
        <div
          key={index}
          className={`relative aspect-square overflow-hidden transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Vintage image ${index + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover sepia hover:sepia-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  )
}
