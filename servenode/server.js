const express = require('express')

const init = require('./config/dbase')

const app = express()

const port =  3001

const userRouters = require('./routes/user')


// app.get('/', (req, res) => {
//     res.send({
//         data: 'Hola Mundo'
//     })

// })

app.use(userRouters)

app.listen(port, () => {

    console.log('En línea !!!')
})

