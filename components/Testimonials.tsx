'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Gracias a La Voz Docente, mi disfonía fue reconocida como enfermedad profesional después de años de lucha. Su apoyo fue total.",
      author: "Prof. J.A.",
      profession: "Primaria",
      rating: 5
    },
    {
      text: "Lograron una indemnización justa y rápida por mi incapacidad vocal. Se enfocan en el docente y eso se nota. ¡Recomendados!",
      author: "Maestra R.V.",
      profession: "Jardín",
      rating: 5
    },
    {
      text: "La comunicación fue excelente. Me explicaron cada instancia y me dieron mucha tranquilidad. Hoy tengo la compensación que merecía.",
      author: "Docente G.L.",
      profession: "Secundaria",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="section-padding relative">
      {/* Fondo multi-difuminado inspirado en Hero */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div 
          className="absolute left-[25%] top-[30%] -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(47,107,58,0.28) 0%, transparent 60%)',
            filter: 'blur(34px)'
          }}
        />
        <div 
          className="absolute left-[70%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(248,217,72,0.30) 0%, transparent 62%)',
            filter: 'blur(38px)'
          }}
        />
        <div 
          className="absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(248,162,109,0.24) 0%, transparent 60%)',
            filter: 'blur(40px)'
          }}
        />
        {/* Capas adicionales: salmón y verde secundarios */}
        <div 
          className="absolute left-[18%] top-[58%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(250,128,114,0.20) 0%, transparent 64%)',
            filter: 'blur(32px)'
          }}
        />
        <div 
          className="absolute left-[82%] top-[32%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,139,34,0.18) 0%, transparent 64%)',
            filter: 'blur(32px)'
          }}
        />
      </div>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            LA CONFIANZA DE NUESTROS CLIENTES HABLA POR NOSOTROS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quienes nos eligen avalan nuestros resultados
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative">
            <Quote className="h-12 w-12 text-primary-600 mb-6" />
            
            <div className="min-h-[200px] flex items-center">
              <div className="text-center w-full">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].profession}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              +500
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Docentes Asesorados
            </h3>
            <p className="text-gray-600">
              con éxito en los últimos 5 años
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              9 de cada 10
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Casos Exitosos
            </h3>
            <p className="text-gray-600">
              de disfonía lograron el reconocimiento de enfermedad profesional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
