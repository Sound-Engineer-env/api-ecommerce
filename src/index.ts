import express, { Request, Response } from 'express';
const app = express();
const path = require('path');

//settings express
app.set('port',3000);//configura el nombre:port y un valor numerico

//middlewares
//express.static() = middleware para archivos estáticos
//__dirname = directorio de ubicación actual
//se accede a archivos HTML desde JS
//app.use(express.static(path.join(__dirname + "\\..",'public')));

//routes
//app.get('url', Funcion) - >accede a info del servidor
app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenidos');
});


//puerto por el que escucha
app.listen(app.get('port'),()=>{
	console.log(`App corriendo por el puerto ${app.get('port')}78987`);   
})
