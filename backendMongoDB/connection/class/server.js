const express = require ('express')
const bodyParser = require ('body-parser')

module.exports = class Server {
    
    app
    port = 3000;
    host = 'localhost';

    constructor(){
        this.app = express();
       
        this.app.use(bodyParser.urlencoded({ extended: true}));
        this.app.use(bodyParser.json());


    }

    start(callback){
        this.app.listen(this.port, this.host, callback)
    }

}