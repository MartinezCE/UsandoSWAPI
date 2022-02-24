const url = 'https://swapi.dev/api';

const HTMLResponse = document.querySelector('#app');
const ul = document.createElement('ul');

fetch(`${url}/films/`)   
.then(respuesta => respuesta.json())
.then(dato => {

        dato.results.forEach(datos => {
            let elemento = document.createElement('li');
            elemento.appendChild(document.createTextNode(`${datos.title}`));
            ul.appendChild(elemento);
        });
        HTMLResponse.appendChild(ul);
    });