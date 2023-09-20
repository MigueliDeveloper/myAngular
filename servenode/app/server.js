const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/dbase')
const cors = require("cors")

// Creamos el servidor
const app = express()

// Conectamos DB Cursos
conectarDB();

app.use(cors())

app.use(express.json());

//Cursos
app.use('/api/cursos', require('./routes/cursosroutes'));
app.use('/api/usuarios', require('./routes/usuariosroutes'));
//Mensajes
// app.use('/api/mensajes', require('./routes/mensajesroutes'));

app.listen(3700, () => {
    console.log('El servidor esta corriendo perfectamente');
})



