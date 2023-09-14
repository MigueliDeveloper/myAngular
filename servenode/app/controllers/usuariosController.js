const Usuarios = require('../models/usuariosModel');

exports.crearUsuarios = async(req, res) => {
    try{
        let usuario;
        // Creamos nuestro usuario
        usuario = new Usuarios(req.body);
        await curso.save();
        res.send(curso);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.json(usuarios)
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuarios = async (req, res) => {
    try{
        const { nombre, descripcion, categoria, duracion, temas} = req.body;
        let usuarios = await Usuarios.findById(req.params.id);
        if(!curso){
            res.status(404).json({ msg: 'No existe el Usuario'})
        }

        usuarios.name = nameUsuarios;
        usuarios.description = description;
        usuarios.category = category;
		usuarios.duracion = duracion;
		usuarios.temas = temas;
        usuarios.image = image;

        usuarios = await Usuarios.findOneAndUpdate({ _id: req.params.id }, curso, { new: true} )
        res.json(usuarios);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerUsuarios = async (req, res) => {
	try {
        let usuario = await Usuarios.findById(req.params.id);
        if(!usuario) {
            res.status(404).json({ msg: 'No existe los Usuarios' })
        }     
        res.json(usuario);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsarios = async (req, res) => {
	try {

		let usuarios = await Usuarios.findById(req.params.id);
		if(!usuarios){
			res.status(404).json({ msg: 'No existe los Usuarios'})
		}
		await Curso.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Curso eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}