# 📋 Comandos Disponibles - La Voz Docente

## 🚀 Desarrollo

### Comandos básicos:
```bash
npm run dev              # Localhost + Red local (recomendado)
npm run dev:local        # Solo localhost (http://localhost:3000)
npm run dev:network      # Localhost + Red local (mismo que dev)
```

### Scripts de inicio rápido:
```bash
# Windows
start-dev.bat

# Linux/Mac
./start-dev.sh
```

## 🏗️ Construcción

```bash
npm run build            # Construir para producción
npm run start            # Servidor de producción (localhost)
npm run start:network    # Servidor de producción (red local)
```

## 🔧 Utilidades

```bash
npm run lint             # Verificar código
npm install              # Instalar dependencias
```

## 🌐 Acceso en Red

### Para probar en otros dispositivos:

1. **Ejecutar:**
   ```bash
   npm run dev:network
   ```

2. **El script mostrará:**
   ```
   🌐 Servidor disponible en:
      Local:    http://localhost:3000
      Network:  http://192.168.1.100:3000
   ```

3. **Conectar dispositivos:**
   - Usar la URL de Network en otros dispositivos
   - Todos deben estar en la misma red WiFi

## 📱 URLs de Acceso

| Modo | URL Local | URL Red |
|------|-----------|---------|
| `dev` | http://localhost:3000 | http://[IP]:3000 |
| `dev:local` | http://localhost:3000 | - |
| `dev:network` | http://localhost:3000 | http://[IP]:3000 |
| `start:network` | http://localhost:3000 | http://[IP]:3000 |

## 🛠️ Solución de Problemas

### Puerto ocupado:
```bash
# Cambiar puerto
npm run dev -- -p 3001
```

### Verificar puerto:
```bash
# Windows
netstat -an | findstr :3000

# Linux/Mac
lsof -i :3000
```

### Verificar IP de red:
```bash
# Windows
ipconfig

# Linux/Mac
ifconfig
```

## 📋 Checklist de Verificación

- [ ] `npm install` ejecutado
- [ ] `npm run dev:network` funcionando
- [ ] URLs mostradas correctamente
- [ ] Acceso local funcionando
- [ ] Acceso en red funcionando
- [ ] Dispositivos conectados a la misma WiFi

---

**La Voz Docente** - Comandos de desarrollo configurados.
