const { networkInterfaces } = require('os');

function showAllIPs() {
  const interfaces = networkInterfaces();
  
  console.log('\n🌐 Todas las interfaces de red disponibles:');
  console.log('=' .repeat(60));
  
  for (const name of Object.keys(interfaces)) {
    console.log(`\n📡 ${name}:`);
    
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4') {
        const status = iface.internal ? '🔒 Loopback' : '🌍 Red Local';
        console.log(`   ${iface.address} (${status})`);
      }
    }
  }
  
  console.log('\n' + '=' .repeat(60));
  console.log('💡 Para usar una IP específica, modifica el script get-network-ip.js');
  console.log('   o usa: npm run dev -- --hostname [IP_ESPECIFICA]');
  console.log('');
}

showAllIPs();








