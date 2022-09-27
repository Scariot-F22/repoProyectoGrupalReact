const mongoose = require ('mongoose');


const mongoConnection = mongoose.connect ('mongodb+srv://BDReact:BDReact123@bdreact.wh9tbis.mongodb.net/test',
   {useUnifiedTopology: true, useNewUrlParser:true},
    (error)=>{
        if(error){
            throw error// Muestra el error y no sigue;
}else{console.log("base de datos online");
}});
module.exports = mongoConnection;