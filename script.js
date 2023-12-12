import { barcelona, madrid, valencia, sevilla, zaragoza } from "./ciudades.js";

let enlaces= document.querySelectorAll('a')
let titulo= document.getElementById('titulo')
let subtitulo= document.getElementById('subtitulo')
let parrafo= document.getElementById('parrafo')
let precio= document.getElementById('precio')


// Agregamos el evento click a cada enlace
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        // Removemos la clase activo a todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active')
        });
        // Agregamos la clase activo al enlace que se ha hecho click
        enlace.classList.add('active')

        // Obtenemos el contenido del enlace que se ha hecho click
        let contenido= obtenerContenido(this.textContent)

        // Actualizamos el contenido de los elementos del DOM
        titulo.innerHTML= contenido.titulo
        subtitulo.innerHTML= contenido.subtitulo
        parrafo.innerHTML= contenido.parrafo
        precio.innerHTML= contenido.precio
    })    
});

function obtenerContenido(enlace){
    let contenido= {
        'Barcelona': barcelona,
        'Madrid': madrid,
        'Valencia': valencia,
        'Sevilla': sevilla,
        'Zaragoza': zaragoza
    };
    return contenido[enlace];
}

