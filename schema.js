const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema(
    {name : String , pass : String},
    {collection : 'usuarios'}
)
const Usuario = mongoose.model('Usuario' , usuarioSchema)

const inicioSchema = new mongoose.Schema(
    {texto : String },
    {collection : 'inicio'}
)
const Inicio = mongoose.model('Inicio' , inicioSchema)

// const headerNavShema = new mongoose.Schema(
//     {href : String , title: String },
//     {collection : 'headerNav'}
// )
// const HeaderNav = mongoose.model('HeaderNav' , headerNavShema)

const librosSchema = new mongoose.Schema(
    {nombre : String , autor: String , fecha : String },
    {collection : 'libros'}
)
const Libros = mongoose.model('Libros' , librosSchema)

module.exports = {
    Usuario,
    Inicio,
    Libros
}