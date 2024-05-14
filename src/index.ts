import server from './server';
import { PORT } from './config/envs';
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then((res) => {
    console.log("Conexión a la base de datos establecida");
    server.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`)
    });
})

