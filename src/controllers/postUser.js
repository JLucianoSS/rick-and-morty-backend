const { User } = require("../db/connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.staus(400).json({ message: "Faltan datos" });
    const [user, isCreated] = await User.findOrCreate({
      where:{ email, password },
    });
    res.status(201).send({user,isCreated:isCreated});
  } catch (error) {
    res.status(500).json({msg: 'Internal server error', err: error.message});
  }
};


module.exports = postUser;
