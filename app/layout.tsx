import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'La Voz Docente - Defensa Legal para Docentes',
  description: 'Especialistas en derecho laboral docente. Luchamos por el reconocimiento de la disfonía como enfermedad profesional y la defensa de sus derechos.',
  keywords: 'derecho laboral docente, disfonía, enfermedad profesional, indemnizaciones, abogados docentes',
  authors: [{ name: 'La Voz Docente' }],
  metadataBase: new URL('https://lavozdocente.com'),
  alternates: {
    canonical: 'https://lavozdocente.com/',
  },
  openGraph: {
    title: 'La Voz Docente - Defensa Legal para Docentes',
    description: 'Especialistas en derecho laboral docente y disfonía profesional.',
    url: 'https://lavozdocente.com',
    siteName: 'La Voz Docente',
    images: [
      { url: '/hero-v2.png', width: 1200, height: 630, alt: 'La Voz Docente' },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Voz Docente - Defensa Legal para Docentes',
    description: 'Especialistas en derecho laboral docente y disfonía profesional.',
    images: ['/hero-v2.png'],
  },
  icons: {
    icon: '/logo.jpg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'La Voz Docente',
            description: 'Estudio jurídico especializado en derecho laboral docente, disfonía profesional e indemnizaciones.',
            url: 'https://lavozdocente.com',
            logo: 'https://lavozdocente.com/hero-v2.png',
            image: 'https://lavozdocente.com/hero-v2.png',
            telephone: '+54 11 2451-5788',
            email: 'contacto@lavozdocente.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Tucumán 1539',
              addressLocality: 'CABA',
              addressCountry: 'AR'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -34.6037,
              longitude: -58.3816
            },
            openingHoursSpecification: [{
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
              opens: '09:00',
              closes: '18:00'
            }],
            sameAs: ['https://instagram.com/voz_docente'],
            areaServed: 'Argentina',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Servicios legales',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reconocimiento de Disfonía' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cobro de Indemnizaciones' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asesoría Legal Docente Integral' } }
              ]
            }
          }) }}
        />
      </body>
    </html>
  )
}
