const mongoose = require('mongoose')
const UsuariosSchema = new mongoose.Schema(
    {
        _id: String,
        name: String,
        description: String,
        category: String,
        duracion: Number,
        temas: String,
        image: String
        
    }
)

module.exports = mongoose.model('usuarios', UsuariosSchema)