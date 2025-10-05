'use client'

import { Target, Eye, Heart, Clock, Users, Award } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const About = () => {
  return (
    <section id="quienes-somos" className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-anton text-gris-800 mb-8 tracking-wide">
            QUIÉNES SOMOS
          </h2>
          <p className="text-xl md:text-2xl text-gris-600 max-w-4xl mx-auto font-medium">
            Nuestro Compromiso Nace de la Experiencia. Conozca a los profesionales que entienden la ley y la realidad de la docencia en Argentina.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission & Vision */}
          <div className="space-y-10">
            <AnimatedSection className="glass-card p-10 glass-shine" delay={100}>
              <div className="flex items-center mb-6">
                <div className="glass-card rounded-full p-3 mr-4">
                  <Target className="h-8 w-8 text-naranja-500" />
                </div>
                <h3 className="text-3xl font-anton text-gris-800 tracking-wide">Nuestra Misión</h3>
              </div>
              <p className="text-gris-600 text-xl leading-relaxed font-medium">
                Ser la voz legal que cada docente necesita, garantizando el reconocimiento y la reparación integral por el desgaste de su labor.
              </p>
            </AnimatedSection>

            <AnimatedSection className="glass-card p-10 glass-shine" delay={200}>
              <div className="flex items-center mb-6">
                <div className="glass-card rounded-full p-3 mr-4">
                  <Eye className="h-8 w-8 text-verde-900" />
                </div>
                <h3 className="text-3xl font-anton text-gris-800 tracking-wide">Nuestra Visión</h3>
              </div>
              <p className="text-gris-600 text-xl leading-relaxed font-medium">
                Liderar la defensa de los derechos de salud laboral docente, estableciendo precedentes de justicia.
              </p>
            </AnimatedSection>
          </div>

          {/* Team Photo Placeholder */}
          <AnimatedSection className="glass-card p-10 text-center glass-shine" delay={300}>
            <div className="glass-card rounded-2xl p-10">
              <div className="glass-card rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-naranja-500" />
              </div>
              <h4 className="text-2xl font-anton text-gris-800 mb-4 tracking-wide">Nuestro Equipo</h4>
              <p className="text-gris-600 text-lg font-medium">
                Profesionales especializados en derecho laboral docente con amplia experiencia en casos de salud ocupacional.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <AnimatedSection className="mb-20" delay={150}>
          <h3 className="text-3xl md:text-4xl font-anton text-center text-gris-800 mb-16 tracking-wide">
            Nuestros Valores Centrales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="service-card text-center">
              <div className="glass-card rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-10 w-10 text-naranja-500" />
              </div>
              <h4 className="text-2xl font-anton text-gris-800 mb-4 tracking-wide">Ética</h4>
              <p className="text-gris-600 text-lg font-medium">
                Máxima transparencia y confidencialidad en cada caso que manejamos.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="glass-card rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-verde-900" />
              </div>
              <h4 className="text-2xl font-anton text-gris-800 mb-4 tracking-wide">Experiencia</h4>
              <p className="text-gris-600 text-lg font-medium">
                10 años enfocados 100% en el rubro docente con resultados comprobados.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="glass-card rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-10 w-10 text-naranja-500" />
              </div>
              <h4 className="text-2xl font-anton text-gris-800 mb-4 tracking-wide">Dedicación</h4>
              <p className="text-gris-600 text-lg font-medium">
                Seguimiento constante y personalizado en cada etapa de su caso.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Bloque "Datos Clave de Autoridad" eliminado por solicitud */}
      </div>
    </section>
  )
}

export default About
