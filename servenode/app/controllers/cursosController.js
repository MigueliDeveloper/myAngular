const Cursos = require('../models/cursosModels');

exports.crearCursos = async(req, res) => {
    try{
        let curso;
        // Creamos nuestro curso
        curso = new Cursos(req.body);
        await curso.save();
        res.send(curso);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }


}