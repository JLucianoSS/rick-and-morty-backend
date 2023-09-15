const users =  require("../utils/users");

const login = (req,res) =>{
    const { email, password} = req.query;

    //verifica si hay algun  usuario que conincida con el email y password
    const user = users.some( user => user.email === email && user.password ===password)
    
    // comprueba la respuesta y da el acceso #ojo user es un booleano
    user ? res.json({access:true}) : res.json({access:false}) // creo que ya devlueve starus 200
}

module.exports = login;