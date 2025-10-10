# 📸 Imagen Hero - Placeholder

## 🎯 **Imagen Requerida**
- **Archivo**: `abogado-hero.jpg`
- **Ubicación**: `/public/images/hero/abogado-hero.jpg`
- **Tamaño recomendado**: 400x500px (ratio 4:5)
- **Formato**: JPG, PNG, WebP
- **Peso máximo**: 300KB

## 📋 **Especificaciones Técnicas**

### 🖼️ **Dimensiones**
- **Mobile**: 320x384px (w-80 h-96)
- **Desktop**: 384x500px (w-96 h-[500px])
- **Ratio**: 4:5 (vertical)

### 🎨 **Estilo Visual**
- **Bordes redondeados**: `rounded-2xl`
- **Sombra**: `shadow-2xl`
- **Overlay**: Gradiente sutil de izquierda a derecha
- **Posición**: Centrada verticalmente, 32px del borde derecho

### 📍 **Posicionamiento**
```css
position: absolute;
right: 32px;           /* right-8 */
top: 50%;              /* top-1/2 */
transform: translateY(-50%);  /* -translate-y-1/2 */
z-index: 20;           /* z-20 (por encima del fondo) */
```

## 🎯 **Contenido Sugerido**

### 👨‍💼 **Tipo de Imagen**
- **Abogado profesional** en traje
- **Fondo neutro** o desenfocado
- **Expresión confiable** y profesional
- **Iluminación natural** o profesional

### 🎨 **Estilo de Foto**
- **Retrato vertical** (4:5)
- **Enfoque en el rostro** y parte superior del cuerpo
- **Colores neutros** que complementen la paleta
- **Alta calidad** y resolución

## 🚀 **Cómo Agregar la Imagen**

### 📁 **Paso 1: Guardar la Imagen**
1. Guarda tu imagen como `abogado-hero.jpg`
2. Colócala en `/public/images/hero/abogado-hero.jpg`
3. Asegúrate de que tenga las dimensiones correctas

### 🎨 **Paso 2: Optimizar (Opcional)**
```bash
# Usar herramientas como:
- TinyPNG.com
- Squoosh.app
- ImageOptim (Mac)
```

### ✅ **Paso 3: Verificar**
- La imagen se carga correctamente
- Se ve bien en móvil y desktop
- El overlay se integra bien
- No interfiere con el texto

## 🎨 **Alternativas de Estilo**

### 🖼️ **Si prefieres otra imagen:**
```jsx
// Cambiar el src en components/Hero.tsx
src="/images/hero/tu-imagen.jpg"
```

### 📐 **Si necesitas otras dimensiones:**
```jsx
// Ajustar las clases de tamaño
className="relative w-72 h-80 md:w-80 md:h-96"
```

## 💡 **Consejos**

1. **Usa WebP** para mejor compresión
2. **Optimiza antes** de subir
3. **Prueba en móvil** y desktop
4. **Mantén consistencia** con la paleta de colores
5. **Alt text descriptivo** para accesibilidad

¡Una vez que agregues la imagen, se mostrará perfectamente integrada con el diseño glassmorphism! 🎨📸







