# 🌐 Guía de Acceso en Red Local

## 🚀 Inicio Rápido

### Para acceder desde otros dispositivos:

```bash
npm run dev:network
```

El script mostrará automáticamente:
- **URL Local:** http://localhost:3000
- **URL Red:** http://[TU_IP]:3000

## 📱 Cómo Conectar Dispositivos

### 1. **Preparar el servidor**
```bash
# En la computadora principal
npm run dev:network
```

### 2. **Conectar dispositivos**
- **Móvil/Tablet:** Abrir navegador y ir a la URL de red
- **Otra computadora:** Misma red WiFi + URL de red
- **Ejemplo:** http://192.168.1.100:3000

### 3. **Verificar conexión**
- Todos los dispositivos deben estar en la misma red WiFi
- El firewall puede pedir permisos (permitir Node.js)

## 🔧 Comandos Disponibles

| Comando | Uso | Acceso |
|---------|-----|--------|
| `npm run dev` | Desarrollo local | Solo localhost |
| `npm run dev:network` | Desarrollo + red | Localhost + Red |
| `npm run dev:auto` | Con info automática | Localhost + Red + Info |
| `npm run start:network` | Producción + red | Localhost + Red |

## 🛠️ Solución de Problemas

### ❌ No puedo acceder desde otros dispositivos

**Posibles causas:**
1. **Firewall bloqueando conexiones**
   - Windows: Permitir Node.js en el firewall
   - macOS: Configurar en Preferencias del Sistema > Seguridad

2. **Dispositivos en redes diferentes**
   - Verificar que todos estén en la misma WiFi
   - No usar redes de invitados

3. **IP incorrecta**
   - Usar `npm run dev:auto` para ver la IP correcta
   - Verificar con `ipconfig` (Windows) o `ifconfig` (macOS)

### ❌ El servidor no inicia

**Verificar:**
- Puerto 3000 disponible
- Node.js instalado correctamente
- Dependencias instaladas (`npm install`)

### ❌ Conexión lenta

**Optimizaciones:**
- Cerrar aplicaciones que usen ancho de banda
- Usar conexión WiFi 5GHz si está disponible
- Verificar distancia del router

## 📋 Checklist de Verificación

- [ ] Servidor iniciado con `npm run dev:network`
- [ ] IP mostrada correctamente
- [ ] Dispositivos en la misma red WiFi
- [ ] Firewall configurado
- [ ] Puerto 3000 accesible
- [ ] Sitio carga en todos los dispositivos

## 🔒 Consideraciones de Seguridad

⚠️ **Importante:** El acceso en red es solo para desarrollo local.

- No usar en redes públicas
- No exponer en internet sin configuración de seguridad
- Para producción, usar servicios como Vercel o Netlify

## 📞 Soporte

Si tienes problemas:
1. Verificar que todos los dispositivos estén en la misma red
2. Comprobar configuración del firewall
3. Usar `npm run dev:auto` para ver información detallada

---

**La Voz Docente** - Desarrollo con acceso en red local configurado.








