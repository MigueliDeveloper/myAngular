const Cursos = require('../models/cursosModels');

exports.crearCursos = async(req, res) => {
    try{
        let curso;
        // Creamos nuestro curso
        curso = new Cursos(req.body);
        await pepe.curso();
        res.send(curso);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error'); 
    }
}

exports.obtenerCursos = async(req, res) => {
    try {
        const cursos = await Cursos.find();
        res.json(cursos)
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarCursos  = async (req, res) => {
    try{
        const { nombreCurso, descripcion, duracionCurso } = req.body;
        let cursos = await Cursos.findById(req.params.id);
        if(!cursos){
            res.status(404).json({ msg: 'No existe el Curso'})
        }

        cursos.nombreCurso = nombreCurso;
        cursos.descripcion = descripcion;
        cursos.duracionCurso = duracionCurso;
	

        usuarios = await Usuarios.findOneAndUpdate({ _id: req.params.id }, curso, { new: true} )
        res.json(cursos);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCurso = async (req, res) => {
	try {
        let curso = await Cursos.findById(req.params.id);
        if(!curso) {
            res.status(404).json({ msg: 'No existe el Curso' })
        }     
        res.json(curso);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCursos = async (req, res) => {
	try {

		let cursos = await Cursos.findById(req.params.id);
		if(!cursos){
			res.status(404).json({ msg: 'No existe el Curso'})
		}
		await Cursos.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Curso eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
