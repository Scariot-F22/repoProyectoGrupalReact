const Router = require ('express');
const productoSchema = require('../models/productos.model');



const productRoutes = Router();


////////////////////////////////PARA PROBAR EN POSTMAN
productRoutes.post("/item", (req, res) => {

  const body = req.body

  productoSchema.find(body, (error, result)=>{
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


/////////////////////////////CREACION DE PRODUCTOS----------
productRoutes.post('/create', (req, res)=>{

  const product = {
    category: req.body.category,
    subcategory: req.body.subcategory,
    name: req.body.name,
    _id: req.body._id,
    description: req.body.description,
    image: req.body.image
  };

  console.log(product);
  
  productoSchema.create(product).then(result=>{
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

// /////////////////////////////BUSQUEDA DE PRODUCTOS ----------

// productRoutes.post('/producto', (req, res) =>{
//   const body = req.body;

//   productoSchema.findOne({product: body.product}, null, null, (error, result)=>{
//     if (error){
//       throw error
//     }
//     if (!result){
//       res.json({
//         estado: "success",
//         mensaje: "Producto no encontrado en BD"
//       })
//     }
//     if (result){
//       res.json ({
//         estado: "success",
//         mensaje: "Producto ENCONTRADO",
//         data: result
//       })
//     }
//   })
// })

module.exports = productRoutes;