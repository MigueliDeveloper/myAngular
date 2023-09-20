const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursosController');

// api / usuarios
router.post('/', cursoController.crearCursos);
router.get('/', cursoController.obtenerCursos);
router.put('/:id', cursoController.actualizarCursos);
router.get('/:id', cursoController.obtenerCursos);
router.delete('/:id', cursoController.eliminarCursos);

module.exports = router;