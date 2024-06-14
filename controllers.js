const mongoose = require('mongoose')

const { Usuario , Inicio , Libros , Carrousel , Webs} = require('./schema')

const getUsuarios = async ( req , res , next)=>{

    const buscar = await Usuario.find()

    res.json(buscar)
}

const postUsuarios = async ( req , res , next )=>{

    const {name , pass} = req.body

    const buscar = await Usuario.findOne({ name , pass})

    res.json(buscar)
}

const getInicio = async ( req , res , next)=>{

    try{

        const inicio    = await Inicio.findOne()
        const carrousel = await Carrousel.find()
        const webs      = await Webs.find()

        const total = {inicio , carrousel , webs}
        res.status(200).json(total)

    }catch(error){
        next(error)
    }

}

const getLibros = async ( req , res , next)=>{

    const buscar = await Libros.find()

    res.json(buscar)
}

const postLibros = async ( req , res , next )=> {

    const { nombre , autor , fecha } = req.body

    const nuevo = new Libros({ nombre , autor , fecha })

    await nuevo.save()

    const newLibro = await Libros.find()

    res.status(201).json(newLibro)
}

const deleteLibros = async (req , res , next)=>{

    try { 

        const {id} = req.params

        await Libros.findByIdAndDelete(id)

        const libroEliminado = await Libros.find()
        
        res.status(200).json(libroEliminado)

    }catch(error){

        console.log(error)
        res.status(500).json({error : 'Error interno del servidor'})
    }
    
}

const putLibros = async (req, res, next) => {

    try {
      const { id } = req.params
      const { nombre, autor , fecha } = req.body

      await Libros.findByIdAndUpdate(id, { nombre, autor , fecha })
      const editarLibro = await Libros.find()

      res.status(200).json(editarLibro)
    } catch (error) {
      next(error)
    }
}

module.exports = {
    getUsuarios,
    postUsuarios,
    getInicio,
    getLibros,
    postLibros,
    deleteLibros,
    putLibros
}
