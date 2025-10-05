'use client'

import { MessageCircle, Phone, Send } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = '1124515788'
    const message = 'Hola, me interesa una consulta sobre mi caso de disfonía docente.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCall = () => {
    const phoneNumber = '1124515788'
    window.open(`tel:${phoneNumber}`, '_self')
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-28">
      {/* Glassmorphism Background - Más llamativo y dinámico */}
      <div className="absolute inset-0">
        {/* Capa principal glassmorphism - Más visible */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 80% 30%, rgba(243, 112, 33, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 85% 70%, rgba(47, 107, 58, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 50%, rgba(248, 217, 72, 0.7) 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, rgba(248, 162, 109, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 90% 20%, rgba(248, 217, 72, 0.4) 0%, transparent 50%),
              linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.05) 100%)
            `,
            backdropFilter: 'blur(25px) saturate(180%)',
            WebkitBackdropFilter: 'blur(25px) saturate(180%)'
          }}
        />
        
        {/* Halo principal bajo la imagen (desktop lg+) */}
        <div
          className="hidden lg:block absolute -translate-x-1/2 -translate-y-1/2 left-3/4 top-1/2 w-[780px] h-[780px] rounded-full"
          style={{
            background: `
              radial-gradient(circle, rgba(248, 217, 72, 0.35) 0%, transparent 60%),
              radial-gradient(circle, rgba(243, 112, 33, 0.22) 0%, transparent 70%),
              radial-gradient(circle, rgba(248, 162, 109, 0.18) 0%, transparent 65%)
            `,
            filter: 'blur(38px)'
          }}
          aria-hidden
        />
        
        {/* Imagen Hero desktop - absoluta (solo lg y superior) */}
        <Image
          src="/hero-v2.png"
          alt="Abogado especialista en derecho laboral docente"
          width={480}
          height={640}
          className="hidden lg:block absolute left-3/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 object-contain object-center rounded-2xl w-96 h-[500px] lg:w-[520px] lg:h-[640px]"
          priority
        />

        {/* Elementos flotantes con movimiento - Más visibles y dinámicos */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Círculo naranja principal - Más grande y visible */}
          <div 
            className="absolute w-[500px] h-[500px] rounded-full animate-drift"
            style={{
              background: 'radial-gradient(circle, rgba(243, 112, 33, 0.5) 0%, transparent 60%)',
              top: '5%',
              right: '5%',
              filter: 'blur(40px)',
              animationDelay: '0s'
            }}
          />
          
          {/* Círculo verde - Reducido */}
          <div 
            className="absolute w-64 h-64 rounded-full animate-float-slow"
            style={{
              background: 'radial-gradient(circle, rgba(47, 107, 58, 0.2) 0%, transparent 70%)',
              top: '25%',
              right: '20%',
              filter: 'blur(35px)',
              animationDelay: '2s'
            }}
          />
          
          {/* Círculo amarillo - Más grande y visible */}
          <div 
            className="absolute w-[450px] h-[450px] rounded-full animate-float-medium"
            style={{
              background: 'radial-gradient(circle, rgba(248, 217, 72, 0.6) 0%, transparent 60%)',
              bottom: '10%',
              right: '15%',
              filter: 'blur(35px)',
              animationDelay: '4s'
            }}
          />
          
          {/* Círculo naranja claro - Más visible */}
          <div 
            className="absolute w-80 h-80 rounded-full animate-float-fast"
            style={{
              background: 'radial-gradient(circle, rgba(248, 162, 109, 0.4) 0%, transparent 70%)',
              bottom: '20%',
              right: '8%',
              filter: 'blur(30px)',
              animationDelay: '6s'
            }}
          />
          
          {/* Elementos amarillos adicionales */}
          <div 
            className="absolute w-72 h-72 rounded-full animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(248, 217, 72, 0.4) 0%, transparent 70%)',
              top: '50%',
              right: '30%',
              filter: 'blur(25px)',
              animationDelay: '1s'
            }}
          />
          
          <div 
            className="absolute w-96 h-96 rounded-full animate-drift"
            style={{
              background: 'radial-gradient(circle, rgba(248, 217, 72, 0.3) 0%, transparent 70%)',
              top: '15%',
              right: '2%',
              filter: 'blur(45px)',
              animationDelay: '3s'
            }}
          />
          
          {/* Elementos naranjas adicionales */}
          <div 
            className="absolute w-64 h-64 rounded-full animate-float-medium"
            style={{
              background: 'radial-gradient(circle, rgba(243, 112, 33, 0.3) 0%, transparent 70%)',
              bottom: '40%',
              right: '35%',
              filter: 'blur(20px)',
              animationDelay: '5s'
            }}
          />
          
          <div 
            className="absolute w-56 h-56 rounded-full animate-float-fast"
            style={{
              background: 'radial-gradient(circle, rgba(248, 162, 109, 0.3) 0%, transparent 70%)',
              top: '70%',
              right: '25%',
              filter: 'blur(25px)',
              animationDelay: '7s'
            }}
          />
          
          {/* Elementos blancos sutiles */}
          <div 
            className="absolute w-48 h-48 rounded-full animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
              top: '35%',
              right: '40%',
              filter: 'blur(20px)',
              animationDelay: '1.5s'
            }}
          />
        </div>
        
        {/* Efecto de brillo sutil - Sin bordes */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, transparent 50%, rgba(255, 255, 255, 0.03) 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      <div className="relative z-10 py-8 lg:py-12 px-6 lg:pl-12">
        <div className="text-left w-full lg:w-1/2 mx-0">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-anton text-gris-800 mb-2 leading-tight tracking-wide">
            SU TRANQUILIDAD ES NUESTRA 
            <span className="text-gradient block">MATERIA</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-anton text-verde-900 mb-4 tracking-wide">
            LUCHAMOS POR LA JUSTICIA LABORAL DOCENTE
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gris-600 mb-6 leading-relaxed font-medium">
            Su voz es su herramienta de trabajo. Si se ve afectada, la ley lo ampara. 
            Lo acompañamos para que su disfonía sea reconocida como enfermedad profesional 
            y reciba la compensación que corresponde.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-start items-start mb-6">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="btn-primary text-lg px-8 py-4 group glass-shine flex items-center hover:shadow-lg transition-shadow"
            >
              <MessageCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              WhatsApp ahora
            </button>

            {/* Call Button */}
            <button
              onClick={handleCall}
              className="btn-secondary text-lg px-8 py-4 group glass-shine flex items-center hover:shadow-md transition-shadow"
            >
              <Phone className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Llamar ahora
            </button>

            {/* Contact Form Button */}
            <button
              onClick={scrollToContact}
              className="btn-glass text-lg px-8 py-4 group glass-shine flex items-center hover:shadow-md transition-shadow"
            >
              <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Enviar consulta
            </button>
          </div>

          {/* Imagen Hero mobile - debajo del texto */}
          <div className="mt-6 lg:hidden relative flex justify-center">
            {/* Halo bajo la imagen (mobile) */}
            <div 
              className="absolute inset-0 -z-10 rounded-2xl"
              style={{
                background: `
                  radial-gradient(circle at 50% 60%, rgba(248, 217, 72, 0.35) 0%, transparent 60%),
                  radial-gradient(circle at 70% 40%, rgba(243, 112, 33, 0.22) 0%, transparent 65%),
                  radial-gradient(circle at 30% 70%, rgba(248, 162, 109, 0.18) 0%, transparent 60%)
                `,
                filter: 'blur(30px)'
              }}
              aria-hidden
            />
            <Image
              src="/hero-v2.png"
              alt="Abogado especialista en derecho laboral docente"
              width={384}
              height={500}
              className="object-contain object-center rounded-2xl w-96 h-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
