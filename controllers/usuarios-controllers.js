const { Usuario } = require("../models/models")

// Esta ruta maneja las solicitudes relacionadas CON LA MODIFICIACIONDE USUARIOS
// @route {GET , PUT , POST} /gestor
// @route {DELETE} /gestor/id/:id


const getUsuarios = async (req, res, next ) => {
    try {
        const buscar = await Usuario.find()
        res.json(buscar)
    } catch (error) {
        next({ statusText : error.message })
    }
    
}
const putUsuarios = async (req, res, next ) => {
    
    try {
        const { id , ...datos } = req.body
        await Usuario.findByIdAndUpdate(id, datos)
        const buscar = await Usuario.find()
        res.json(buscar)
    } catch (error) {
        next({ statusText : error.message })
    }
}
const postUsuarios = async (req, res, next ) => {
   try {
        const { username , pass } = req.body
        const nuevo = new Usuario({ username , pass })
        await nuevo.save()
        const buscar = await Usuario.find()
        res.json(buscar)
   } catch (error) {
        next({statusText : error.message})
   }
}
const deleteUsurios = async (req, res, next ) => {
    
   try {
        const {id} = req.params
        await Usuario.findByIdAndDelete(id)
        const buscar = await Usuario.find()
        res.json(buscar)
   } catch (error) {
        next({ statusText : error.message })
   }
}





module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsurios
}