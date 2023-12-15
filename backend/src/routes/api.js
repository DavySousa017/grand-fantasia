const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota para criar um novo usuÃ¡rio
router.post("/createUser", userController.createUser);
router.post("/confirmAccount", userController.confirmAccount);
// router.post('/login', userController.login);

module.exports = router;
