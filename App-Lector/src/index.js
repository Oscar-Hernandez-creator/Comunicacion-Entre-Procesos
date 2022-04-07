const express = require('express');
const readline = require('line-by-line');

// Settings
const app = express();

const NOMBRE_ARCHIVO = 'cuento.txt';

app.set('port', 3030);

// Routes
app.get('/lectura', (req, res) => {
    console.log('Comenzando Lectura!!');
    res.json(leerLineas(), 200);
});

// Listening Port
app.listen(app.get('port'), () => {
    console.log('Estoy listo para leer...');
    leerLineas();
});

let leerCuento = new readline(`src/${NOMBRE_ARCHIVO}`);

let leerLineas = () => {
    return leerCuento.on('line', linea => {
        leerCuento.pause();
        console.log(linea);
    });
};

