'use client'

import { Mic, DollarSign, FileText, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Mic,
      title: 'Reconocimiento de Disfonía',
      description: 'Disfonía como Enfermedad Profesional: Asesoramiento y gestión integral para que tu afección vocal sea reconocida legalmente. Defensa efectiva ante ARTs y Comisiones Médicas.',
      color: 'naranja-500'
    },
    {
      icon: DollarSign,
      title: 'Cobro de Indemnizaciones',
      description: 'Indemnizaciones por Incapacidad: Acompañamiento en el cálculo y cobro de la compensación económica total que te corresponde por la incapacidad generada por la disfonía.',
      color: 'verde-900'
    }
  ]

  return (
    <section id="areas" className="section-padding relative">
      {/* Fondo con múltiples difuminados al estilo Hero */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div 
          className="absolute left-[30%] top-[35%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(248,217,72,0.42) 0%, transparent 60%)',
            filter: 'blur(38px)'
          }}
        />
        <div 
          className="absolute left-[65%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(243,112,33,0.28) 0%, transparent 65%)',
            filter: 'blur(42px)'
          }}
        />
        <div 
          className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(248,162,109,0.22) 0%, transparent 60%)',
            filter: 'blur(40px)'
          }}
        />
        {/* Capas extra: salmón y verde suave */}
        <div 
          className="absolute left-[20%] top-[65%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(250,128,114,0.22) 0%, transparent 65%)',
            filter: 'blur(36px)'
          }}
        />
        <div 
          className="absolute left-[78%] top-[28%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(47,107,58,0.20) 0%, transparent 65%)',
            filter: 'blur(34px)'
          }}
        />
      </div>
      <div className="container-custom">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-anton text-gris-800 mb-8 tracking-wide">
            ÁREAS DE PRÁCTICA
          </h2>
          <p className="text-xl md:text-2xl text-gris-600 max-w-4xl mx-auto mb-12 font-medium">
            Dos pilares fundamentales para proteger tu salud laboral y tus derechos.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <AnimatedSection key={index} className="service-card glass-shine group hover:shadow-lg transition-shadow" delay={index * 100}>
                <div className={`glass-card rounded-2xl p-6 w-20 h-20 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-10 w-10 text-${service.color}`} />
                </div>
                <h3 className="text-2xl font-anton text-gris-800 mb-6 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gris-600 leading-relaxed text-lg font-medium">
                  {service.description}
                </p>
              </AnimatedSection>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <AnimatedSection className="glass-card p-12 max-w-3xl mx-auto glass-shine" delay={150}>
            <h3 className="text-3xl font-anton text-gris-800 mb-6 tracking-wide">
              ¿Necesitás Asesoramiento Específico?
            </h3>
            <p className="text-gris-600 mb-8 text-xl font-medium">
              Cada caso es único. Contactanos para una evaluación personalizada de tu situación y conocer todos los servicios disponibles.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-primary group glass-shine"
            >
              Ver todos los servicios
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Services
