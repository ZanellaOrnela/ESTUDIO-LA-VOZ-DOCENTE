'use client'

import { MessageCircle, Target, DollarSign } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: MessageCircle,
      title: 'Claridad y Comunicación Continua',
      description: 'Te explicamos cada paso con lenguaje simple y mantenemos actualización constante por WhatsApp y teléfono.'
    },
    {
      icon: Target,
      title: 'Especialización Comprobada y Trayectoria',
      description: '100% enfocados en docentes: estrategias más fuertes y resultados favorables.'
    },
    {
      icon: DollarSign,
      title: 'Enfoque Estratégico y Tarifas Transparentes',
      description: 'Trabajamos con cuota litis: solo cobramos si ganás.'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CÓMO TRABAJAMOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodología clara, comunicación continua y foco en resultados.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <AnimatedSection key={index} className="text-center glass-card p-8 glass-shine card-hover" delay={index * 120}>
                <div className="rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-white/40 border border-white/40">
                  <IconComponent className="h-10 w-10 text-verde-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {advantage.description}
                </p>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Success Formula Visual */}
        <AnimatedSection className="glass-card p-8 md:p-12 glass-shine" delay={150}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gris-800">
              Nuestra Fórmula de Éxito
            </h3>
            <p className="text-lg text-gris-600">
              Tres pasos simples para avanzar con seguridad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/50 border border-white/40">
                <span className="text-2xl font-bold text-verde-900">1</span>
              </div>
              <h4 className="font-semibold mb-2 text-gris-800">Análisis Claro</h4>
              <p className="text-sm text-gris-600">Revisamos su caso y definimos objetivos</p>
            </div>
            <div className="text-center">
              <div className="rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/50 border border-white/40">
                <span className="text-2xl font-bold text-verde-900">2</span>
              </div>
              <h4 className="font-semibold mb-2 text-gris-800">Estrategia Personalizada</h4>
              <p className="text-sm text-gris-600">Plan a medida con comunicación permanente</p>
            </div>
            <div className="text-center">
              <div className="rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/50 border border-white/40">
                <span className="text-2xl font-bold text-verde-900">3</span>
              </div>
              <h4 className="font-semibold mb-2 text-gris-800">Ejecución y Resultados</h4>
              <p className="text-sm text-gris-600">Avance medible y búsqueda de la máxima compensación</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default WhyChooseUs


