const Router = require ('express');
const usuarioSchema = require('../models/usuarios.model');



const userRoutes = Router();


////////////////////////////////PARA PROBAR EN POSTMAN
userRoutes.post("/product", (req, res) => {

  const body = req.body

  usuarioSchema.find(body, (error, result)=>{
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

  // res.json({
  //   estado: "success",
  //   mensaje: "ok en JS",
  // });


/////////////////////////////CREACION DE USUARIO ----------
userRoutes.post('/create', (req, res)=>{

  const user = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password
  };
  
  usuarioSchema.create(user).then(result=>{
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

/////////////////////////////LOGIN DE USUARIO ----------

userRoutes.post('/login', (req, res) =>{
  const body = req.body;

  usuarioSchema.findOne({email: body.email}, null, null, (error, result)=>{
    if (error){
      throw error
    }
    if (!result){
      res.json({
        estado: "success",
        mensaje: "Usuario no encontrado en BD"
      })
    }
    if (result){
      res.json ({
        estado: "success",
        mensaje: "Usuario ENCONTRADO",
        data: result
      })
    }
  })
})

module.exports = userRoutes;

