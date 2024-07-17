const {Header} = require("./../models/models")

// Esta ruta maneja las solicitudes relacionadas con la informacion de categorias y subcategorias del header
// @route {GET} /header

const getHeader = async (req, res, next) => {
    try {
        const buscar = await Header.find()

        res.json(buscar)
    } catch (error) {
        next({ statusText : error.message })
    }
    

}



module.exports = {
    getHeader
}