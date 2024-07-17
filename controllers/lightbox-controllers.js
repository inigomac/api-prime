const {Lig} = require("./../models/models")

// Esta ruta maneja las solicitudes relacionadas con todas las fotos necesarias para el lightbox de peliculas
// @route {GET} /lightbox

const getLightbox = async (req , res , next) => {
    try {
        const buscar = await Lig.find()
        res.json(buscar)
    } catch (error) {
        next({ statusText : error.message })
    }
   

}

module.exports = {
    getLightbox
}