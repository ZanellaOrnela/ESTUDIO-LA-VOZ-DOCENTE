# Guía de Despliegue - La Voz Docente

## 🚀 Despliegue en Vercel (Recomendado)

### Opción 1: Despliegue Automático desde GitHub

1. **Conectar repositorio a Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Hacer login con GitHub
   - Click en "New Project"
   - Importar el repositorio de La Voz Docente

2. **Configuración del proyecto**
   - Framework Preset: Next.js
   - Root Directory: `./` (por defecto)
   - Build Command: `npm run build` (automático)
   - Output Directory: `.next` (automático)

3. **Variables de entorno (si es necesario)**
   - Agregar en la sección "Environment Variables"
   - No se requieren variables especiales para este proyecto

4. **Desplegar**
   - Click en "Deploy"
   - Vercel construirá y desplegará automáticamente

### Opción 2: Despliegue con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

## 🌐 Despliegue en Netlify

### Opción 1: Desde GitHub

1. **Conectar repositorio**
   - Ir a [netlify.com](https://netlify.com)
   - "New site from Git"
   - Conectar con GitHub y seleccionar el repositorio

2. **Configuración de build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x (en Variables de entorno)

3. **Desplegar**
   - Click en "Deploy site"

### Opción 2: Drag & Drop

```bash
# Construir el proyecto
npm run build

# Comprimir la carpeta .next
# Subir a Netlify via drag & drop
```

## 🐳 Despliegue con Docker

### Crear Dockerfile

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Construir y ejecutar

```bash
# Construir imagen
docker build -t la-voz-docente .

# Ejecutar contenedor
docker run -p 3000:3000 la-voz-docente
```

## 🔧 Configuración Post-Despliegue

### 1. Configurar FormSubmit

1. **Actualizar URL del formulario**
   - Editar `components/Contact.tsx`
   - Reemplazar `su_correo_aqui@estudiojuridico.com` con el email real
   - Configurar página de agradecimiento

2. **Configurar FormSubmit**
   - Ir a [formsubmit.co](https://formsubmit.co)
   - Agregar el email de destino
   - Configurar redirección de éxito

### 2. Configurar Dominio Personalizado

#### En Vercel:
1. Ir a Project Settings > Domains
2. Agregar dominio personalizado
3. Configurar DNS según instrucciones

#### En Netlify:
1. Ir a Site Settings > Domain Management
2. Agregar dominio personalizado
3. Configurar DNS

### 3. Optimizaciones SEO

1. **Google Analytics** (opcional)
   - Agregar script en `app/layout.tsx`
   - Configurar tracking ID

2. **Google Search Console**
   - Verificar propiedad del sitio
   - Enviar sitemap

3. **Meta tags adicionales**
   - Actualizar en `app/layout.tsx`
   - Agregar Open Graph tags

## 📱 Verificación Post-Despliegue

### Checklist de Verificación

- [ ] Sitio carga correctamente
- [ ] Navegación funciona en todas las secciones
- [ ] Formulario de contacto envía emails
- [ ] Botón de WhatsApp funciona
- [ ] Diseño responsivo en móvil/tablet/desktop
- [ ] Animaciones funcionan correctamente
- [ ] Enlaces externos funcionan
- [ ] Velocidad de carga optimizada

### Herramientas de Testing

```bash
# Test de rendimiento
npm run build
npm run start

# Lighthouse audit
# Usar Chrome DevTools > Lighthouse
```

## 🔄 Actualizaciones Futuras

### Para actualizar el sitio:

1. **Hacer cambios en el código**
2. **Commit y push a GitHub**
3. **Vercel/Netlify se actualizará automáticamente**

### Para cambios manuales:

```bash
# En Vercel
vercel --prod

# En Netlify
netlify deploy --prod
```

## 🆘 Solución de Problemas

### Error de Build
- Verificar que todas las dependencias estén instaladas
- Revisar errores de TypeScript
- Verificar configuración de Next.js

### Formulario no funciona
- Verificar URL de FormSubmit
- Comprobar configuración de email
- Revisar logs de la consola

### Problemas de rendimiento
- Optimizar imágenes
- Revisar bundle size
- Implementar lazy loading

## 📞 Soporte

Para problemas técnicos o modificaciones, contactar al desarrollador.

---

**La Voz Docente** - Sitio web optimizado para conversión y rendimiento.


