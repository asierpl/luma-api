const express = require('express')

const { getUsuarios, postUsuarios, getInicio, getLibros, postLibros , deleteLibros , putLibros } = require('./controllers')

const router = express.Router()

router.route('/')
    .get(getUsuarios)
    .post(postUsuarios)

router.route('/inicio')
    .get(getInicio)

router.route('/libros')
    .get(getLibros)
    .post(postLibros)

router.route('/libros/:id')
    .delete(deleteLibros)
    .put(putLibros)
    


module.exports = { router } 