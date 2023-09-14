const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duracion: {
        type: Number,
        required: true
    },
    temas: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Usuarios', CursoSchema);