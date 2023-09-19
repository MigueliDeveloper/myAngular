const express = require('express');
const router = express.Router();
const cursoÇontroller = require('../controllers/cursosController');

// api / usuarios

router.post('/', cursoÇontroller.crearCursos)
router.get('/', cursoÇontroller.obtenerCursos);
router.put('/:id', cursoÇontroller.actualizarCursos);
router.get('/:id', cursoÇontroller.obtenerCursos);
router.delete('/:id', cursoÇontroller.eliminarCursos);

module.exports = router;