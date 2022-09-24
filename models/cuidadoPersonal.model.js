const {Schema} = require ('mongoose');
const mongoose = require ('mongoose');




//ESQUEMA BD
const cuidadoPersonalSchema = new Schema({
    
   
    name:{
        type:String,
        required:[true, 'El name es necesario']
    },
    description:{
        type:String,
        required: [true, 'description es necesario']
    },
    image:{
        type:String,
        required:[ true, 'image es necesario']
    },
    

});




module.exports = mongoose.model('CuidadoPersonalSchema', cuidadoPersonalSchema);