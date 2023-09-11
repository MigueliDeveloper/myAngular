const mongoose = require('mongoose')

const CursosSchema = new mongoose.Schema(
    {
        nombreCurso: {type: String},

        descripcion: {type: String},

        duracionCurso: {type: number}

    }
)

module.exports = mongoose.model('cursos', CursosSchema)