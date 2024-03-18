const express = require('express');
const soap = require('soap');
const personaPort = require('./controllers/PersonaPort');

const app = express();

// Define la ruta para el servicio SOAP
//app.post('/soap-service', (req, res) => {
// Define el servicio SOAP


const service = {
    YourService: {
        YourPort: personaPort
    }
};

// Define la ruta del servicio SOAP
const xml = require('fs').readFileSync('wsdl/personaService.wsdl', 'utf8');

// Crea un servidor SOAP y escucha en la ruta /soap-service
soap.listen(app, '/soap-service', service, xml);

//res.send('Servicio SOAP está activo en /soap-service');
//});

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
