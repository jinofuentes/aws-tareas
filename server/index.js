console.log('Servidor iniciando...');

import express from "express";
import {PORT} from './config.js';   //? Configuraciones
import indexRoutes from './routes/index.routes.js' //?Rutas
import tareasRoutes from './routes/tareas.routes.js' //?Rutas
import {pool} from './db.js'

const app = express();

app.get('/', (req, res) => res.send ('<h1>Dale Pequeño Juan</h1>')) //? Para el inicio /

app.use(express.json()) //? Convierte todo lo que llega de las rutas en formato JSON

app.use(indexRoutes)
app.use('/api',tareasRoutes)

app.listen(PORT)
console.log(`Servidor corriendo en el puerto ${PORT}`)