console.clear()

const express  = require('express')
const cors     = require('cors')
const mongoose = require('mongoose')

let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/luma'

const app = express()

const conectar = async () => { 
    await mongoose.connect(URL_ATLAS)
        .then( ()=> console.log('Conectado a la BBDD') )
        .catch( error => console.log( error ) )
}

conectar()

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

const headerNavShema = new mongoose.Schema(
    {href : String , title: String },
    {collection : 'headerNav'}
)
const HeaderNav = mongoose.model('HeaderNav' , headerNavShema)



app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }))


app.get('/' , async ( req , res , next)=>{

    const buscar = await Usuario.find()

    res.json(buscar)
})

app.post('/' , async ( req , res , next )=>{

    const {name , pass} = req.body

    const buscar = await Usuario.findOne({ name , pass})

    res.json(buscar)
})

app.get('/inicio' , async ( req , res , next)=>{

    try{

        const buscar    = await Inicio.findOne()
        // const headerNav = await HeaderNav.find()

        // const datos = {buscar , headerNav}

        res.status(200).json(buscar)

    }catch(error){
        next(error)
    }
    
    

    

   
})


app.listen( 3000 , ()=> console.log('Iniciando API') )