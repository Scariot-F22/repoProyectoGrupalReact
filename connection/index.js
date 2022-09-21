
const Server = require('./class/server');
const mongoConnection = require ('./bin/mongoConnection')
const userRoutes = require('../routes/users');
const productRoutes = require ('../routes/products')
//import bodyPaser from 'body-parser';


//INSTANCIANDO SERVIDOR WEB -> incia el server

const server = new Server ();

server.start (()=>{
    console.log("Servidor JS en linea");
})

//BODY PARSER -> establece como llegan las peticiones

//server.app.use(bodyPaser.urlencoded({extended:true}));
//server.app.use(bodyPaser.json());

//RUTAS DE LA APP -> rutas al Backend

server.app.use('/users', userRoutes);
server.app.use('/products', productRoutes);

//CONEXION MONGODB -> conexion a la Base de Datos

mongoConnection;

