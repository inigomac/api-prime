console.clear()
console.log('🟡 Iniciando JS')

// Index.js
// Conectamos con la base de datos de la carpeta Prime para recibir todas las peliculas y demás información
// 
// @middlewares {cors , nodemon }
// @routing { Express , router , path }
// @odm {mongoose}
// @endpoint --> en el archivo router lo especifico

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path');
const { router } = require('./router/router')

const PORT = process.env.PORT || 3000
const MONGO = process.env.mongo || 'mongodb://127.0.0.1:27017/prime' 


const conectar = async () => mongoose.connect(MONGO)
                        .then( () => console.log(`🛒 Conectando con Mongo`) )
                        .catch( err => console.log(err.message) )
conectar()

const app = express()


    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended : false }))
    app.use( router )

app.listen( PORT , () => console.log('🛠️ Trabajando API') )
