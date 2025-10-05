const { networkInterfaces } = require('os');

function getNetworkIP() {
  const interfaces = networkInterfaces();
  
  // Priorizar interfaces de red local (WiFi, Ethernet) sobre VPN
  const preferredInterfaces = ['Wi-Fi', 'Ethernet', 'Local Area Connection'];
  
  // Primero buscar en interfaces preferidas
  for (const preferredName of preferredInterfaces) {
    if (interfaces[preferredName]) {
      for (const iface of interfaces[preferredName]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address;
        }
      }
    }
  }
  
  // Si no encuentra en interfaces preferidas, buscar en todas
  for (const name of Object.keys(interfaces)) {
    // Saltar interfaces de VPN
    if (name.toLowerCase().includes('vpn') || name.toLowerCase().includes('proton')) {
      continue;
    }
    
    for (const iface of interfaces[name]) {
      // Skip internal (loopback) addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  
  return 'localhost';
}

// Permitir especificar IP manualmente via variable de entorno
const customIP = process.env.CUSTOM_IP;
const ip = customIP || getNetworkIP();

console.log(`\n🌐 Servidor disponible en:`);
console.log(`   Local:    http://localhost:3000`);
console.log(`   Network:  http://${ip}:3000`);
console.log(`\n📱 Para acceder desde otros dispositivos:`);
console.log(`   - Asegúrate de que estén en la misma red WiFi`);
console.log(`   - Usa la URL: http://${ip}:3000`);
console.log(`\n`);

module.exports = { getNetworkIP };