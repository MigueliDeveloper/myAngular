// Rutas para curso
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// api / usuarios
router.post('/', usuariosController.crearUsuarios);
router.get('/', usuariosController.obtenerUsuarios);
router.put('/:id', usuariosController.actualizarUsuarios);
router.get('/:id', usuariosController.obtenerUsuarios);
router.delete('/:id', usuariosController.eliminarUsuarios);

module.exports = router;

