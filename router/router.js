const express = require('express')
const { postLogin } = require('../controllers/login-controllers')
const { getHeader } = require('../controllers/header-controllers')
const { getUsuarios, postUsuarios, putUsuarios, deleteUsurios } = require('../controllers/usuarios-controllers')
const { getCatalogo } = require('../controllers/catalogo-controllers')
const { getLightbox } = require('../controllers/lightbox-controllers')

// Ruta principal de la API (Router.js)
// Esta ruta maneja las solicitudes a la raiz de la API
// 
// @endpoint {/}   [post]
// @endpoint {/header}   [get]
// @endpoint {/gestor}   [get , post , put]
// @endpoint {/gestor/id/:id}   [delete]
// @endpoint {/catalogo}   [get]
// @endpoint {/lightbox}   [get]



const router = express.Router()

    // para la pagina de login
    router.route('/login')
        .post(postLogin)
    // para la pagina principal
    router.route('/header')
        .get(getHeader)
    // para el gestor de perfiles
    router.route('/gestor')
        .get(getUsuarios)
        .post(postUsuarios)
        .put(putUsuarios)
    router.route('/gestor/id/:id')
        .delete(deleteUsurios)
    // para el catalogo completo de peliculas portada
    router.route('/catalogo')
        .get(getCatalogo)
    // para hacer el primer lightbox
    router.route('/lightbox')
        .get(getLightbox)
        
    router.all('*', (req, res, next) => {
        const err = new Error()
        err.status = 404
        err.statusText = `No encuentro el Endpoint`
        next(err)
    })
    
    router.use((err, req, res, next) => {
        let { status, statusText } = err
        status = status || 500
        statusText = statusText || `Error interno de mi API`
        res.status(status).json({ status, statusText })
    })


module.exports = {
    router
}