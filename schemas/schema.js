const mongoose = require('mongoose')


const usuariosSchema = new mongoose.Schema(
    { username : String , pass : String },
    { collection : 'usuarios' }
    // Modelo de Usuarios
    // Este modelo define la contraseña y usuario que cada cliente debera de poner
)

const catalogoSchema = new mongoose.Schema(
    { id : Number , titulo : String , edad : String , descripcion : String , duracion : String , anoEstreno : Number , portada : String },
    { collection : 'peliculasCatalogo' }
    // Modelo de Catalogo
    // Este modelo define la estructura de cada pelicula con sus propiedades
)

const headerSchema = new mongoose.Schema(
    { id : Number , categorias : String , subcategorias : Array },
    { collection : 'header' }
    // Modelo de Header
    // Este modelo definde la estructura del Header que contendra los apartados
)

const ligSchema = new mongoose.Schema(
    { id : Number , imgprincipal : String , imgtitulo : String , edad : String },
    { collection : 'peliculasLig' }
    // Modelo de Lig
    // Este modelo contiene las propiedades necesarias para cada lightbox
)


module.exports = {
    usuariosSchema,
    catalogoSchema,
    headerSchema,
    ligSchema
}

