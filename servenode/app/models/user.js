const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name:{type: String},
        lastname:{type: String},
        course:{type: String},
        age: {type: Number},
        password:{
            type: String,
            required: true,
        }, 
        email:{
            type: String,
            unique: true,
            required: true
        },
        phone:{type: String},
        foto: {type: String},
        estado: {type: Boolean},
        nota: {type: Number},
        isProfessor:{
            type: Boolean,
            required: true

        }
    }
)

module.exports = mongoose.model('user', UserSchema)