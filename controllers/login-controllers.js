const { Usuario } = require("../models/models")

// Esta ruta maneja las solicitudes relacionadas con el login de los usuarios
// @route {POST} /login

const postLogin = async (req, res, next) => {

    try {
        const { username, pass } = req.body

        const buscar = await Usuario.findOne({ username, pass })

        if (buscar) {
            res.json({ login: true })

        } else {
            res.json({ login: false })
        }
    } catch (error) {
        next({ statusText : error.message })
    }
}



module.exports = {
    postLogin
}