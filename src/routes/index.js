const express = require("express");
const { getCharById, postUser,login,postFav,deleteFav } = require("../controllers");

const router = express.Router();

router.get("/character/:id", getCharById);
router.post("/login", postUser);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;