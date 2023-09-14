const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()

// Conectamos DB Cursos
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/usuarios', require('./app/usuariosroutes'));

app.listen(3700, () => {
    console.log('El servidor esta corrinedo perfectamente')
})


// const express = require('express')

// const app = express()

// const port = 3700

// app.listen(port,() =>{
//     console.log('La aplicación está en línea....')
// })
// const userRouters = require('./app/routes/user')

// app.use(userRouters)

// // Conexión con Base datos
// const mongoose = require('mongoose')

// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://127.0.0.1:27017/myAngularv', {
//     useNewUrlParser: true,
// })
// .then(() => {
//     console.log("Conexión establecida...")
// })
// .catch(err => console.log(err))
