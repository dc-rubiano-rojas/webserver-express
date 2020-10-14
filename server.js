const express = require('express')
const app = express()

const hbs = require('hbs');
// Helpers
require('./hbs/helpers/helpers')

// Heroku
// para obtener el puerto que heroku le va a dar a mi app
const port = process.env.PORT || 3000;

// Middleware
// Es una instruccion que se va ejecutar siempre 
// no importa que url es el que la persona pida
app.use(express.static(__dirname + '/public'));

// Express HBS (Handlebars) engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



// RUTAS
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'danieL'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log('Escuchando Peticiones en el puerto', port);
})