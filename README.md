# Comunicación Entre Procesos

Este repositorio es sobre una aplicación sobre dos servicios NodeJS que simulan ser dos programas distintos que no inician hasta que ambos se comuniquen entre sí.

## Cómo funciona

### App-Lector

La App-Lector es una aplicación express que hace la función de ser una aplicación que lee y dicta un archivo txt (un cuento) con la librería 'readline', pero no inicia su función hasta que tiene a un oyente.

### App-Oyente

La App-Oyente es una aplicación express que cumple el rol de un oyente, esperando obtener respuesta de un servidor (mediante un 'fetch') para comenzar a escuchar el cuento y guardar la información línea a línea mediante la librería 'fs'. El archivo que se va a crear tiene que ser del mismo nombre que el título del cuento. Si ya existe un archivo con este nombre, lo elimina para volver a crearlo.

#### Inizializar el proyecto

Para instalar dependencias, correr el comando

##### App-Lector
###### npm i express readline@2

##### App-Oyente
###### npm i express fetch fs --save

O simplemente correr en ambos proyectos el comando

###### npm i