const hbs = require('hbs');


// Helpers 
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


hbs.registerHelper('capitalizar', (text) => {

    let palabras = text.split(' ');

    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        // palabras[idx] = palabra.charAt(0).toUpperCase();
    });

    return palabras.join(' ');
});