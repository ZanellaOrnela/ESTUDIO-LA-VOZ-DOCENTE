'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Send, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section id="contacto" className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-anton text-gris-800 mb-8 tracking-wide">
            COMIENCE HOY MISMO. AGENDE SU CONSULTA CONFIDENCIAL
          </h2>
          <p className="text-xl md:text-2xl text-gris-600 max-w-4xl mx-auto font-medium">
            Respuesta en menos de 24 horas. Su consulta es confidencial.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection className="glass-card p-10 glass-shine" delay={100}>
            <div className="mb-10">
              <h3 className="text-3xl font-anton text-gris-800 mb-6 tracking-wide">
                Solicitar Evaluación Gratuita de Caso
              </h3>
              <p className="text-gris-600 mb-8 text-lg font-medium">
                No espere a que avance el problema. Una consulta a tiempo es el primer paso. 
                Complete el formulario y recibirá una evaluación gratuita de su situación.
              </p>
                <p className="text-sm text-gris-500 font-medium">
                  Respondemos en menos de 24 horas hábiles.
                </p>
            </div>

            {!isSubmitted ? (
              <form 
                action="https://formsubmit.co/su_correo_aqui@estudiojuridico.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gris-800 mb-3">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Su Nombre Completo"
                    className="form-input w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gris-800 mb-3">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Su Correo Electrónico"
                    className="form-input w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold text-gris-800 mb-3">
                    Teléfono (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Su Número de Teléfono (WhatsApp)"
                    className="form-input w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gris-800 mb-3">
                    Describa Brevemente su Caso *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    placeholder="Describa Brevemente su Caso (Máx. 500 caracteres)"
                    className="form-textarea w-full"
                  />
                </div>

                <input type="hidden" name="_next" value="https://escala.com/thank-you-page-ejemplos/" />
                <input type="hidden" name="_captcha" value="false" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center glass-shine"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      <span className="text-lg">Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">Enviar Solicitud de Consulta</span>
                      <Send className="ml-3 h-6 w-6" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gris-500 text-center font-medium">
                  Su consulta será procesada de forma segura por FormSubmit para garantizar la confidencialidad.
                </p>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="glass-card rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="h-16 w-16 text-verde-900" />
                </div>
                <h3 className="text-3xl font-anton text-gris-800 mb-4 tracking-wide">
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-gris-600 text-lg font-medium">
                  Hemos recibido su consulta. Nos pondremos en contacto con usted en menos de 24 horas hábiles.
                </p>
              </div>
            )}
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-10">
            <AnimatedSection className="glass-card p-10 glass-shine" delay={150}>
              <h3 className="text-3xl font-anton text-gris-800 mb-8 tracking-wide">
                Información de Contacto
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="glass-card rounded-full p-3">
                    <MapPin className="h-6 w-6 text-naranja-500" />
                  </div>
                  <div>
                    <h4 className="font-anton text-xl text-gris-800 mb-2 tracking-wide">Dirección</h4>
                    <p className="text-gris-600 text-lg font-medium">Tucumán 1539, CABA</p>
                    <a 
                      href="https://maps.google.com/?q=Tucumán+1539,+CABA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-naranja-500 hover:text-naranja-600 text-lg font-semibold transition-colors"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="glass-card rounded-full p-3">
                    <Clock className="h-6 w-6 text-verde-900" />
                  </div>
                  <div>
                    <h4 className="font-anton text-xl text-gris-800 mb-2 tracking-wide">Horario de Atención</h4>
                    <p className="text-gris-600 text-lg font-medium">Lunes a Viernes, de 9:00 a 18:00 hs.</p>
                    <p className="text-gris-500 text-base font-medium">(Consultas virtuales disponibles)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="glass-card rounded-full p-3">
                    <Phone className="h-6 w-6 text-naranja-500" />
                  </div>
                  <div>
                    <h4 className="font-anton text-xl text-gris-800 mb-2 tracking-wide">Teléfono Directo</h4>
                    <a 
                      href="tel:1124515788"
                      className="text-naranja-500 hover:text-naranja-600 text-xl font-bold transition-colors"
                    >
                      1124515788
                    </a>
                  </div>
                </div>

                {/* Mapa embebido */}
                <div>
                  <iframe
                    title="Mapa - Tucumán 1539, CABA"
                    src="https://maps.google.com/maps?q=Tucum%C3%A1n%201539,%20CABA&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-72 rounded-xl border border-white/30"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="glass-card p-10 glass-shine" delay={250}>
              <h3 className="text-2xl font-anton text-gris-800 mb-6 tracking-wide">
                ¿Necesita Ayuda Urgente?
              </h3>
              <p className="text-gris-600 mb-8 text-lg font-medium">
                ¿Urgente? Escríbanos por WhatsApp y le respondemos al instante.
              </p>
              <a
                href="https://wa.me/541124515788?text=Hola,%20necesito%20asesoramiento%20legal%20para%20mi%20caso%20de%20disfonía"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center glass-shine"
              >
                <Phone className="h-6 w-6 mr-3" />
                Contactar por WhatsApp
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
