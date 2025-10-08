# 📁 Carpeta Public - Imágenes y Assets

## 📍 **Estructura de Carpetas**

```
public/
├── images/
│   ├── hero/          # Imágenes para la sección Hero
│   ├── team/          # Fotos del equipo
│   ├── logos/         # Logos y marcas
│   └── icons/         # Iconos personalizados
├── favicon.ico        # Favicon del sitio
└── README.md          # Este archivo
```

## 🎯 **Cómo Usar las Imágenes**

### 📱 **En Componentes React**
```jsx
// Imagen desde la carpeta public
<img src="/images/hero/background.jpg" alt="Descripción" />

// Con Next.js Image (recomendado)
import Image from 'next/image'

<Image 
  src="/images/team/abogado1.jpg" 
  alt="Abogado Principal"
  width={300}
  height={400}
/>
```

### 🎨 **En CSS/Tailwind**
```css
/* En archivos CSS */
.hero-bg {
  background-image: url('/images/hero/background.jpg');
}

/* En clases de Tailwind */
<div className="bg-[url('/images/hero/pattern.svg')]">
```

## 📂 **Tipos de Imágenes Recomendadas**

### 🖼️ **Hero Section**
- **Formato**: JPG, PNG, WebP
- **Tamaño**: 1920x1080px (Full HD)
- **Peso**: Máximo 500KB
- **Nombres sugeridos**:
  - `background-hero.jpg`
  - `pattern-glassmorphism.png`
  - `gradient-overlay.webp`

### 👥 **Equipo**
- **Formato**: JPG, PNG
- **Tamaño**: 400x400px (cuadradas)
- **Peso**: Máximo 200KB
- **Nombres sugeridos**:
  - `abogado-principal.jpg`
  - `equipo-completo.jpg`
  - `foto-perfil-1.jpg`

### 🏢 **Logos y Marcas**
- **Formato**: SVG, PNG
- **Tamaño**: Variable según uso
- **Peso**: Máximo 100KB
- **Nombres sugeridos**:
  - `logo-principal.svg`
  - `marca-agua.png`
  - `icono-justicia.svg`

### 🎨 **Iconos**
- **Formato**: SVG, PNG
- **Tamaño**: 24x24px, 32x32px, 48x48px
- **Peso**: Máximo 50KB
- **Nombres sugeridos**:
  - `icono-whatsapp.svg`
  - `icono-telefono.png`
  - `icono-email.svg`

## 🚀 **Optimización de Imágenes**

### 📱 **Next.js Image Component**
```jsx
import Image from 'next/image'

// Imagen optimizada automáticamente
<Image
  src="/images/hero/background.jpg"
  alt="Fondo Hero"
  width={1920}
  height={1080}
  priority={true}  // Para imágenes above-the-fold
  placeholder="blur"  // Efecto de carga
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 🎯 **Configuración en next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ejemplo.com'], // Dominios externos
    formats: ['image/webp', 'image/avif'], // Formatos modernos
  },
}

module.exports = nextConfig
```

## 📋 **Checklist de Imágenes**

### ✅ **Antes de Subir**
- [ ] Imagen optimizada (peso reducido)
- [ ] Formato correcto (WebP preferido)
- [ ] Tamaño apropiado
- [ ] Nombre descriptivo
- [ ] Alt text definido

### ✅ **Después de Subir**
- [ ] Imagen se carga correctamente
- [ ] Responsive en móvil
- [ ] Performance aceptable
- [ ] Accesibilidad (alt text)

## 🎨 **Ejemplos de Uso en el Proyecto**

### 🏠 **Hero Section**
```jsx
// En components/Hero.tsx
<div className="relative">
  <Image
    src="/images/hero/background-glassmorphism.jpg"
    alt="Fondo glassmorphism"
    fill
    className="object-cover"
    priority
  />
</div>
```

### 👥 **Sección Equipo**
```jsx
// En components/About.tsx
<Image
  src="/images/team/abogado-principal.jpg"
  alt="Dr. Juan Pérez - Abogado Principal"
  width={300}
  height={300}
  className="rounded-full"
/>
```

### 📱 **Iconos**
```jsx
// En components/WhatsAppButton.tsx
<Image
  src="/images/icons/whatsapp-icon.svg"
  alt="WhatsApp"
  width={24}
  height={24}
/>
```

## 💡 **Consejos**

1. **Usa WebP** para mejor compresión
2. **Optimiza antes de subir** (TinyPNG, Squoosh)
3. **Nombres descriptivos** en inglés
4. **Alt text** para accesibilidad
5. **Next.js Image** para optimización automática

¡Guarda todas tus imágenes en esta carpeta y úsalas con rutas que empiecen con `/`! 🎨📁




