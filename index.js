console.clear()

const express  = require('express')
const cors     = require('cors')
const mongoose = require('mongoose')
const {router} = require('./router')

let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/luma'

const app = express()

const conectar = async () => { 
    await mongoose.connect(URL_ATLAS)
        .then( ()=> console.log('Conectado a la BBDD') )
        .catch( error => console.log( error ) )
}

conectar()

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }))
app.use(router)


app.listen( 3000 , ()=> console.log('Iniciando API') )