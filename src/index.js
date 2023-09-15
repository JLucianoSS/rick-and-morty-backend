const express = require("express");
const router = require("./routes")
 
const server = express();
const PORT = 3001;


//MIDDLEWARES
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
  });

server.use(express.json());
server.use("/rickandmorty", router) // --> localhost:3001/rickandmorty/login




//ESCUCHANDO PETICIONES GRACIAS AL SERVICIO LEVANTADO
server.listen(PORT,() => {
    console.log("Server levantado en el puerto " + PORT);
    /*Recuerda que el cannot GET/ se muestra si la ruta no esta definida en tu servidor */
})







/*WEB SERVER BÁSICO */
// const http = require('http');
// const data = require('./utils/data');
// const controller = require('./controllers/getCharById')

// const PORT = 3001;

/* CREACION DEL SERVIDOR */
// const server = http.createServer((request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*');
    
//     const { url } = request;

//     if(url.includes("/rickandmorty/character")){
//         const partes = url.split("/")
//         const id = partes[3];
//         controller.getCharById(response,id)
//     }else{
//         response.writeHead(404,{'Content-type': "application/json"})
//         response.end(JSON.stringify({"error": "url inválida"}))
//     }


    
    // if(url.includes("/rickandmorty/character")){
        // const partes = url.split("/")
        // const id = partes[3];
        // const character = data.find((character) => character.id === Number(id));
        
    //     if(character){
    //         response.writeHead(200,{'Content-type': "application/json"})
    //         return response.end(JSON.stringify(character));
    //     }else{
    //         response.writeHead(404,{'Content-type': "application/json"})
    //         return response.end(JSON.stringify({"error":"Character not found"}))
    //     }  
    // }
    // response.writeHead(404,{'Content-type': "text/plain"})
    // response.end(JSON.stringify("url inválida"))
        
// });
// server.listen(3001,'localhost');
// server.listen(PORT, () => {
//     console.log("Servidor levantado en el puerto ",PORT);
// });


