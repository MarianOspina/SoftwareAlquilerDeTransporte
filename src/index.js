//'use strict';
/*const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hola Mundo');
});
server.listen(3000);
*/

/*const express = require('express');//En este ejemplo se importa el módulo de express. 
const app = express();//Se crea la constante app para inicializar la aplicación bajo Express.
const port = 3000//Se crea la constante port para especificar el número de puerto por el que se accederá a la aplicación.

app.get('/', (req, res) => {//Se utiliza la función get(…) para generar una petición HTTP de tipo GET indicando que la ruta de acceso a esa petición es la raíz del proyecto '/' 
    res.send('Hola Mundo')//Mediante el objeto res se llama a la función send(…) que permite enviar la información que se mostrará en el body de la respuesta.
})  

app.listen(port, () => {
    console.log('La aplicación se está ejecutando por el puerto ' + `${port}`)//se llama a la función listen(…) para establece la conexión bajo el puerto especificado en la constante port.
})*/

const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const conductorRoutes = require("./routes/conductor");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON
//Gestión de las rutas usando el middleware
app.use("/api", conductorRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));
//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
