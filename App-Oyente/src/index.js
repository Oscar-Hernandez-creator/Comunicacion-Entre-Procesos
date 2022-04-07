const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');

// Settings
const app = express();

let nombreArchivo;
let contenidoArchivo = '';

app.set('port', 8080);

app.listen(app.get('port'), () => {
    console.log('Estoy listo para escuchar...');
    escucharCuento();
});

let escucharCuento = async () => {
    let data = null;
    const res = await fetch('http://localhost:3030/lectura')
        .then(async response => { data = await response.json() })
        .then(() => {
            for (let linea of data._lines) {
                guardarArchivo(linea);
                console.log(linea);
            }
        }).catch(error => console.log('Esperando al Lector.'));
}

let guardarArchivo = (contenido) => {
    if (contenidoArchivo == '') {
        nombreArchivo = contenido + '.txt';
        comprobarSiExisteArchivo(nombreArchivo);
        console.log('Archivo creado!\n')
    }
    contenidoArchivo = contenidoArchivo + '\n' + contenido;
    fs.writeFileSync(nombreArchivo, contenidoArchivo, err => { if (err) console.log(err) } )
};

let comprobarSiExisteArchivo = (file) => {
    try {
        fs.unlinkSync(file);
        console.log('Archivo eliminado...\n');
    } catch (e) {
        console.log('Comenzando...\n');
    }
}