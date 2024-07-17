const mongoose = require('mongoose')
const { usuariosSchema, catalogoSchema, headerSchema , ligSchema } = require('../schemas/schema')

// Modelos de la API
//
// @models {Object} Usuario , Catalogo , Header , Lig
// @odm {mongoose}

const Usuario = mongoose.model('Usuario' , usuariosSchema ) 
const Catalogo = mongoose.model('Catalogo' , catalogoSchema )
const Header = mongoose.model( 'Header' , headerSchema )
const Lig = mongoose.model( 'Lig' , ligSchema )


module.exports = {
    Usuario,
    Catalogo,
    Header,
    Lig
}
