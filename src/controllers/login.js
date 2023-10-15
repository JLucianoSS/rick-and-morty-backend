const { User } = require("../db/connection");

const login = async (req, res) => {
    try {
        const {email,password} = req.query;
        if (!email || !password) res.staus(400).json({ message: "Faltan datos" });
        const user = await User.findOne({
            where:{
                email
            }
        });
        if(!user) return res.status(404).send({message:"Usuario Incorrecto "});
        if(user.password !== password) return res.status(403).send({message:"Contraseña incorrecta"});
        console.log("Acceso autorizado");
        
        res.send({access:true});

    } catch (error) {
        res.status(500).json({msg: 'Internal server error', err: error.message});
    }
}

module.exports = login;