# La Voz Docente - Sitio Web

Una aplicación web moderna de una sola página para "La Voz Docente", especialistas en derecho laboral docente. Construida con Next.js, TypeScript, React y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Navegación Fluida**: Scroll suave entre secciones
- **Botón WhatsApp Flotante**: Contacto directo e inmediato
- **Formulario de Contacto**: Integrado con FormSubmit
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Lucide React** - Iconos modernos
- **Framer Motion** - Animaciones avanzadas

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd la-voz-docente
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   Editar `.env.local` con sus configuraciones.

4. **Ejecutar en modo desarrollo**

   **Comando principal (recomendado)**
   ```bash
   npm run dev
   ```
   - Acceso local: http://localhost:3000
   - Acceso red: http://[TU_IP]:3000
   - Muestra automáticamente ambas URLs

   **Solo localhost**
   ```bash
   npm run dev:local
   ```
   Acceso: http://localhost:3000

   **Con información detallada**
   ```bash
   npm run dev:network
   ```
   Misma funcionalidad que `npm run dev` con información adicional.

## 🏗️ Estructura del Proyecto

```
la-voz-docente/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── Header.tsx           # Navegación principal
│   ├── Hero.tsx             # Sección principal
│   ├── About.tsx            # Quiénes somos
│   ├── Services.tsx         # Áreas de práctica
│   ├── WhyChooseUs.tsx      # Ventajas competitivas
│   ├── Testimonials.tsx     # Testimonios
│   ├── Contact.tsx          # Formulario de contacto
│   ├── Footer.tsx           # Pie de página
│   ├── WhatsAppButton.tsx   # Botón flotante WhatsApp
│   └── AnimatedSection.tsx  # Componente de animación
├── hooks/
│   └── useScrollAnimation.ts # Hook para animaciones
└── public/                  # Archivos estáticos
```

## 🌐 Acceso en Red Local

### Para probar en otros dispositivos:

1. **Ejecutar con acceso de red:**
   ```bash
   npm run dev:network
   ```

2. **Conectar dispositivos:**
   - Asegúrate de que todos los dispositivos estén en la misma red WiFi
   - Usa la IP que muestra el script (ej: http://192.168.1.100:3000)

3. **Configurar firewall (si es necesario):**
   - Windows: Permitir Node.js a través del firewall
   - macOS: Permitir conexiones entrantes en el puerto 3000

### Comandos disponibles:

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Solo localhost (http://localhost:3000) |
| `npm run dev:network` | Localhost + Red local |
| `npm run dev:auto` | Con información automática de IPs |
| `npm run start:network` | Producción con acceso de red |

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:
- `primary`: Azul principal
- `secondary`: Grises
- `accent`: Rojos para acentos

### Contenido
El contenido se encuentra directamente en los componentes. Para modificar:
1. Textos: Editar directamente en los archivos `.tsx`
2. Información de contacto: Actualizar en `Contact.tsx` y `Footer.tsx`
3. Formulario: Modificar la URL de FormSubmit en `Contact.tsx`

### Formulario de Contacto
Para configurar el formulario:
1. Reemplazar `su_correo_aqui@estudiojuridico.com` en `Contact.tsx`
2. Configurar la página de agradecimiento en FormSubmit
3. Personalizar campos según necesidades

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Inicio Rápido

### Para desarrollo local:
```bash
# Comando principal (localhost + red local)
npm run dev

# Solo localhost
npm run dev:local
```

### Scripts de inicio rápido:
- **Windows:** Doble clic en `start-dev.bat`
- **Linux/Mac:** `./start-dev.sh`

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Netlify
1. Conectar repositorio a Netlify
2. Configurar build command: `npm run build`
3. Configurar publish directory: `.next`

### Build Local
```bash
npm run build
npm start
```

## 📞 Contacto

- **Teléfono**: 1124515788
- **Dirección**: Tucumán 1539, CABA
- **WhatsApp**: [Contactar](https://wa.me/541124515788)
- **Instagram**: [@voz_docente](https://instagram.com/voz_docente)

## 📄 Licencia

Este proyecto es privado y está destinado exclusivamente para "La Voz Docente".

## 🤝 Soporte

Para soporte técnico o modificaciones, contactar al desarrollador.

---

**La Voz Docente** - Defendiendo los derechos de los educadores desde 2014.
