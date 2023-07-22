"use strict";
const express = require('express');
const app = express();
const path = require('path'); //trae
//settings express
app.set('port', 3000); //configura el nombre:port y un valor numerico
app.listen(3000, () => {
    console.log(`App corriendo por el puerto 5000`);
});
//middlewares
//express.static() = middleware para archivos estatiucos
//__dirname = directorio de ubicació actual
//se accede a archivos HTML desde JS
app.use(express.static(path.join(__dirname, 'public')));
//routes
//app.get('url', Funcion) - >accede a info del servidor
/* app.get('/', (req,res)=>{
    res.send('Bienvenidos')
})


//puerto por el que escucha
app.listen(app.get('port'),()=>{
    console.log(`App corriendo por el puerto ${app.get('port')}`)
})
 */ 
