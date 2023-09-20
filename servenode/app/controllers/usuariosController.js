const Usuarios = require('../models/usuariosModels');

exports.crearUsuarios = async(req, res) => {
    try{
        let usuario;
        // Creamos nuestro usuario
        usuario = new Usuarios(req.body);
        await usuario.save();
        res.send(usuario);

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
        const { name, descripcion, category, duracion, temas, image, fechaCreacion} = req.body;
        let usuarios = await Usuarios.findById(req.params.id);
        if(!usuarios){
            res.status(404).json({ msg: 'No existe el Usuario'})
        }

        usuarios.name = name;
        usuarios.descripcion = descripcion;
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

exports.obtenerUsuario = async (req, res) => {
	try {
        let usuarios = await Usuarios.findById(req.params.id);
        if(!usuarios) {
            res.status(404).json({ msg: 'No existe el Usuario' })
        }     
        res.json(usuarios);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuarios = async (req, res) => {
	try {

		let usuarios = await Usuarios.findById(req.params.id);
		if(!usuarios){
			res.status(404).json({ msg: 'No existe los Usuarios'})
		}
		await Usuarios.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Curso eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}