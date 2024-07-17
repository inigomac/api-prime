const { Catalogo } = require("../models/models")

// Esta ruta maneja las solicitudes relacionadas con el catalogo completo de peliculas
// @route {GET} /catalogo

const getCatalogo = async (req, res, next) => {
    try {
        const buscar = await Catalogo.find()
        res.json(buscar)
    } catch (error) {
        next({ statusText : error.message })
    }
    
}


module.exports = {
    getCatalogo
}

