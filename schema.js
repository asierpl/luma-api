const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema(
    {name : String , pass : String},
    {collection : 'usuarios'}
)
const Usuario = mongoose.model('Usuario' , usuarioSchema)


const inicioSchema = new mongoose.Schema(
    {titulo : String , subtitulo : String},
    {collection : 'inicio'}
)
const Inicio = mongoose.model('Inicio' , inicioSchema)


const carrouselSchema = new mongoose.Schema(
    {src : String , alt : String},
    {collection : 'carrousel'}
)
const Carrousel = mongoose.model('Carrousel' , carrouselSchema)


const websSchema = new mongoose.Schema(
    {title : String , href : String , parrafo : String},
    {collection : 'webs'}
)
const Webs = mongoose.model('Webs' , websSchema)


const librosSchema = new mongoose.Schema(
    {nombre : String , autor: String , fecha : String },
    {collection : 'libros'}
)
const Libros = mongoose.model('Libros' , librosSchema)



module.exports = {
    Usuario,
    Inicio,
    Libros,
    Carrousel,
    Webs
}