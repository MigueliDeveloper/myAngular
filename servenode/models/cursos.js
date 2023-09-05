const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        nombreCurso: {type: String},

        descripcion: {type: String},

        duracionCurso: {type: number}

    }
)

module.exports = mongoose.model('user', UserSchema)