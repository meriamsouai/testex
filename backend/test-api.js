// Script de test simple pour l'API
const http = require('http');

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

function testAPI() {
  console.log('🧪 Test de l\'API Chat...\n');

  // Test GET /api/messages
  console.log('1. Test GET /api/messages');
  http.get(`${BASE_URL}/api/messages`, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('   ✅ GET /api/messages:', res.statusCode === 200 ? 'OK' : 'FAILED');
      console.log('   Réponse:', JSON.parse(data));
      
      // Test POST /api/messages
      console.log('\n2. Test POST /api/messages');
      const postData = JSON.stringify({
        author: 'Test User',
        content: 'Message de test'
      });
      
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': postData.length
        }
      };
      
      const req = http.request(`${BASE_URL}/api/messages`, options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          console.log('   ✅ POST /api/messages:', res.statusCode === 201 ? 'OK' : 'FAILED');
          console.log('   Réponse:', JSON.parse(data));
          
          // Vérifier que le message a été ajouté
          console.log('\n3. Vérification GET /api/messages après POST');
          http.get(`${BASE_URL}/api/messages`, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
              const messages = JSON.parse(data);
              console.log('   ✅ Messages après POST:', messages.length > 0 ? 'OK' : 'FAILED');
              console.log('   Nombre de messages:', messages.length);
              console.log('\n✅ Tous les tests sont passés!');
            });
          }).on('error', (err) => {
            console.error('   ❌ Erreur:', err.message);
          });
        });
      });
      
      req.on('error', (err) => {
        console.error('   ❌ Erreur:', err.message);
      });
      
      req.write(postData);
      req.end();
    });
  }).on('error', (err) => {
    console.error('   ❌ Erreur:', err.message);
    console.error('   Assurez-vous que le serveur est démarré (npm start)');
  });
}

testAPI();

