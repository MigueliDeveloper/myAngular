const express = require('express')

const controller = require('../controllers/cursos')
const router = express.Router()

const path = 'cursos'

router.get(`/${path}`, controller.getData)

module.exports = router