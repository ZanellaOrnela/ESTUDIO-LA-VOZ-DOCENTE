'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hola, necesito asesoramiento legal para mi caso de disfonía. ¿Podrían ayudarme?'
    )
    window.open(`https://wa.me/541124515788?text=${message}`, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="glass-button p-4 md:p-5 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-110 animate-float glass-shine"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-naranja-500" />
      </button>
    </div>
  )
}

export default WhatsAppButton
