const mongoose = require('mongoose');

const CursosSchema = mongoose.Schema({

    nombreCurso: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    duracionCurso: {
        type: number,
        required: true
    }

});

module.exports = mongoose.model('Curso', CursosSchema);