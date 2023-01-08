const express = require('express'); //Framework Node.js
const app = express(); // Instancia de la clase express
const bodyParser = require('body-parser'); // Capturar los datos del body del frontend
const morgan = require('morgan');
const cors = require('cors');
 //Información de peticiones server
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}
app.set('port', process.env.PORT || 4001);
// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:false})); // Recibir datos principales desde formulario
app.use(morgan('dev')); // Info de la peticion HTTP al server
app.use(bodyParser.json()); // Aceptar formato json
// app.use(morgan('combined'));


// Routes
app.use('/api/v1/', require('./api/v1/routes/index'));


app.get('/', (req, res) => {
    res.send({message: 'Hello ADSI 2231424'});
});

app.listen(app.get('port'), ()=>console.log(`server running on port ${app.get('port')}`)); // Iniciando servidor