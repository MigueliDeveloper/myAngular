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
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }

    // nombre type: String required true, apellidos type: String required: true, FNacimineto type: String required: true, telefono: type String required: true, foto: type: String, required: true, fechaCreacion type Date,
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);