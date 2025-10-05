'use client'

import { Scale, MapPin, Phone, Instagram } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-naranja-500 text-white">
      <div className="container-custom py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 border border-white/30 p-2 rounded-xl">
                  <Scale className="h-7 w-7 text-white" />
                </div>
                <span className="text-2xl font-anton tracking-wide text-white">La Voz Docente</span>
              </div>
              <p className="text-white/90 leading-relaxed max-w-sm font-medium">
                Especialistas en derecho laboral docente. Defendemos los derechos de salud de los educadores con más de 10 años de experiencia.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-anton tracking-wide text-white">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-white" />
                  <span className="text-white/90 font-medium">Tucumán 1539, CABA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-white" />
                  <a 
                    href="tel:1124515788"
                    className="text-white hover:text-white/80 transition-colors font-semibold"
                  >
                    1124515788
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-anton tracking-wide text-white">Síganos</h3>
              <p className="text-white/90 mb-4 font-medium">
                Manténgase informado sobre sus derechos
              </p>
              <a
                href="https://instagram.com/voz_docente"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@voz_docente</span>
              </a>
            </div>
          </div>
        {/* Bottom Section */}
        <div className="border-t border-white/40 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/90 text-sm font-medium">
              © 2024 La Voz Docente. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <button
                onClick={scrollToTop}
                className="text-white hover:text-white/80 text-sm font-semibold transition-colors"
              >
                Volver al Inicio
              </button>
              <a
                href="#contacto"
                className="text-white hover:text-white/80 text-sm font-semibold transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


