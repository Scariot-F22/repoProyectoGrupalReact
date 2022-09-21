const {Schema} = require ('mongoose');
const mongoose = require ('mongoose');

const productoSchema = new Schema({
    
   
    category:{
        type:String,
        subcategory:{
            type:String,
            name:{
                type:String,  
            },
            _id:{
                type:String,   
            },
            description:{
                type:String,     
            },
            image:{
                type:String,
               
            },
        }
    },
    

});
module.exports = mongoose.model('ProductoSchema', productoSchema);