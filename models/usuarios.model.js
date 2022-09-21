const {Schema} = require ('mongoose');
const mongoose = require ('mongoose');




//ESQUEMA BD
const usuarioSchema = new Schema({
    
   
    nombre:{
        type:String,
        required:[true, 'El nombre es necesario']
    },
    apellido:{
        type:String,
        required: [true, 'El apellido es necesario']
    },
    email:{
        type:String,
        unique:true,
        required:[ true, 'El email es necesario']
    },
    password:{
        type:String,
        required:[ true, 'El password es necesario']
    },

});




module.exports = mongoose.model('UsuarioSchema', usuarioSchema);



