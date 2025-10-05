'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Scale } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'areas', label: 'Áreas de Práctica' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container-custom px-6 md:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-white/40 bg-white/50">
              <Image
                src="/logo.jpg"
                alt="La Voz Docente - Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <span className="text-2xl font-anton text-gris-800 tracking-wide">La Voz Docente</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gris-700 hover:text-naranja-500 font-semibold transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contacto')}
              className="btn-primary glass-shine"
            >
              Consulta Inmediata
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden glass-button p-3 text-gris-700 hover:text-naranja-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-card mt-4 mx-6">
            <div className="px-8 py-8 space-y-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gris-700 hover:text-naranja-500 font-semibold py-3 transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacto')}
                className="w-full btn-primary glass-shine"
              >
                Consulta Inmediata
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
