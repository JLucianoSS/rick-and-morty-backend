
const axios = require('axios')



const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then( (response) => { //fulfilled/response o data
            const {name,image,species, gender,status,is,origin} = response.data;
            res.writeHead(200,{'Content-type': "application/json"})
            res.end(JSON.stringify({id,name,gender,species,status,origin,image}));
            // console.log(character);         
        })
        .catch( (error) => { // rejected/reason
            res.writeHead(500,{'Content-type': "application/json"}) //500 error por parte del servidor
            res.end(JSON.stringify({"error":error.message}))
            // console.error('Error al obtener la información del personaje:', error);
        });

}

module.exports = {
    getCharById
}