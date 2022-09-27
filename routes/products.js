const Router = require ('express');
const bebesMamasSchema = require('../models/bebesMamas.model');
const bellezaSchema = require('../models/belleza.model');
const cuidadoPersonalSchema = require('../models/cuidadoPersonal.model');
const saludFarmSchema = require('../models/saludFarm.model');
const obrasSocialesSchema = require('../models/obrasSociales.model');



const productRoutes = Router();


////////////////////////////////PARA OBTENER DE BASE DE DATOS
productRoutes.post("/bebesMamas", (req, res) => {

  const body = req.body

  bebesMamasSchema.find(body, (error, result)=>{
    if (error){
      throw error
    }
    if (!result){
      res.json({
        estado: "success",
        mensaje: "base sin datos"
      })
    }
    if (result){
      res.json ({
        estado: "success",
        mensaje: "PRODUCTOS ENCONTRADO",
        data: result
       
      })
      
    }
  })
})

productRoutes.post("/belleza", (req, res) => {

  const body = req.body

  bellezaSchema.find(body, (error, result)=>{
    if (error){
      throw error
    }
    if (!result){
      res.json({
        estado: "success",
        mensaje: "base sin datos"
      })
    }
    if (result){
      res.json ({
        estado: "success",
        mensaje: "PRODUCTOS ENCONTRADO",
        data: result
      })
    }
  })
})

productRoutes.post("/cuidadoPersonal", (req, res) => {

  const body = req.body

  cuidadoPersonalSchema.find(body, (error, result)=>{
    if (error){
      throw error
    }
    if (!result){
      res.json({
        estado: "success",
        mensaje: "base sin datos"
      })
    }
    if (result){
      res.json ({
        estado: "success",
        mensaje: "PRODUCTOS ENCONTRADO",
        data: result
      })
    }
  })
})

productRoutes.post("/saludFarm", (req, res) => {

  const body = req.body

  saludFarmSchema.find(body, (error, result)=>{
    if (error){
      throw error
    }
    if (!result){
      res.json({
        estado: "success",
        mensaje: "base sin datos"
      })
    }
    if (result){
      res.json ({
        estado: "success",
        mensaje: "PRODUCTOS ENCONTRADO",
        data: result
      })
    }
  })
})

productRoutes.post("/obrasSociales", (req, res) => {

  const body = req.body

  obrasSocialesSchema.find(body, (error, result)=>{
    if (error){
      throw error
    }
    if (!result){
      res.json({
        estado: "success",
        mensaje: "base sin datos"
      })
    }
    if (result){
      res.json ({
        estado: "success",
        mensaje: "PRODUCTOS ENCONTRADO",
        data: result
      })
    }
  })
})



/////////////////////////////CREACION DE PRODUCTOS----------
productRoutes.post('/bebesMamas/create', (req, res)=>{

  const product = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  };
  
  bebesMamasSchema.create(product).then(result=>{
          res.json({
            estado:"success",
            mensaje:result
    })
  })
      .catch (error=>{
          res.json({
            estado: "error",
            mensaje: error
          })
      
   });
   

})

productRoutes.post('/belleza/create', (req, res)=>{

  const product = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  };
  
  bellezaSchema.create(product).then(result=>{
          res.json({
            estado:"success",
            mensaje:result
    })
  })
      .catch (error=>{
          res.json({
            estado: "error",
            mensaje: error
          })
      
   });
   

})

productRoutes.post('/cuidadoPersonal/create', (req, res)=>{

  const product = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  };
  
  cuidadoPersonalSchema.create(product).then(result=>{
          res.json({
            estado:"success",
            mensaje:result
    })
  })
      .catch (error=>{
          res.json({
            estado: "error",
            mensaje: error
          })
      
   });
   

})

productRoutes.post('/saludFarm/create', (req, res)=>{

  const product = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  };
  
  saludFarmSchema.create(product).then(result=>{
          res.json({
            estado:"success",
            mensaje:result
    })
  })
      .catch (error=>{
          res.json({
            estado: "error",
            mensaje: error
          })
      
   });
   

})

productRoutes.post('/obrasSociales/create', (req, res)=>{

  const product = {
    name: req.body.name,
    image: req.body.image
  };
  
  obrasSocialesSchema.create(product).then(result=>{
          res.json({
            estado:"success",
            mensaje:result,
            
    })
   
  })
      .catch (error=>{
          res.json({
            estado: "error",
            mensaje: error
          })
      
   });
   

})


module.exports = productRoutes;