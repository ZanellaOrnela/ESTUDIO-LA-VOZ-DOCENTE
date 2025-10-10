// Configuración de desarrollo para La Voz Docente
const { networkInterfaces } = require('os');

const getNetworkIP = () => {
  const interfaces = networkInterfaces();
  
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal (loopback) addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  
  return 'localhost';
};

const config = {
  // Puerto del servidor
  port: process.env.PORT || 3000,
  
  // IP de la red local
  networkIP: getNetworkIP(),
  
  // URLs de acceso
  get urls() {
    return {
      local: `http://localhost:${this.port}`,
      network: `http://${this.networkIP}:${this.port}`
    };
  },
  
  // Mostrar información de acceso
  showAccessInfo() {
    console.log('\n🚀 La Voz Docente - Servidor de Desarrollo');
    console.log('=' .repeat(50));
    console.log(`📱 Acceso Local:    ${this.urls.local}`);
    console.log(`🌐 Acceso Red:      ${this.urls.network}`);
    console.log('=' .repeat(50));
    console.log('\n📋 Para acceder desde otros dispositivos:');
    console.log('   1. Asegúrate de que estén en la misma red WiFi');
    console.log(`   2. Usa la URL: ${this.urls.network}`);
    console.log('   3. El firewall puede pedir permisos');
    console.log('\n');
  }
};

module.exports = config;








