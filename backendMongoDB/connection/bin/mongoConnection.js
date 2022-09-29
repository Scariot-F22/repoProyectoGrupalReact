const mongoose = require ('mongoose');


const mongoConnection = mongoose.connect ('mongodb://localhost:27017/BDReact',
   {useUnifiedTopology: true, useNewUrlParser:true},
    (error)=>{
        if(error){
            throw error// Muestra el error y no sigue;
}else{console.log("base de datos online");
}});
module.exports = mongoConnection;