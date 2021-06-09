const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/AlumnoController')

// mostrar todos los alumnos con GET
router.get('/', alumnoController.mostrar)

// crear alumnos con POST
router.post('/crear', alumnoController.crear)

// editar alumno POST
router.post('/editar', alumnoController.editar)

// borrar GET
router.get('/borrar/:id', alumnoController.borrar)



module.exports = router