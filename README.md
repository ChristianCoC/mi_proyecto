# ESTRUCTURA DE PROYECTO
## Modulo 03 - clase 03 - Soy Henry

### Iniciamos el proyecto:
npm init -y

### Instalacion de dependencias:
- express
- dotenv

### Desarrollo:
- @types/express,
- @types/node,
- morgan,
- nodemon,
- ts-node

### Configuramos el archivo tsconfig.json:
- "rootDir": "./src",
- "outDir": "./dist",
- "include": [
    "src/**/*.ts"
  ],
- "exclude": [
    "node_modules"
  ]

### Configuramos el archivo nodemon.jason:
{
    "watch": [
        "src"
    ],
    "ext": "ts",
    "exec": "ts-node src/index.ts"
}

### Creamos el archivo .env para el puerto del servidor:
PORT = 3000

### Creamos el servidor en los siguientes archivos:
Utilizamos los imports/exports para sincronizar los archivos.
- config/envs.ts
- index.ts
- server.ts

## Manejo de rutas
Iniciamos el CRUD con la creacion y tipado de rutas.
- src ->config
        controllers
        dto
        interfaces
        routes
        services