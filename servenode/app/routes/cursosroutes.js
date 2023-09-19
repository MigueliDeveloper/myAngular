const express = require('express');
const router = express.Router();
const cursoÇontroller = require('../controllers/cursosController');

// api / usuarios
router.post('/', cursosController.crearUsuarios);
router.get('/', cursosController.obtenerUsuarios);
router.put('/:id', cursosController.actualizarUsuarios);
router.get('/:id', cursosontroller.obtenerUsuarios);
router.delete('/:id', cursosController.eliminarUsuarios);

module.exports = router;