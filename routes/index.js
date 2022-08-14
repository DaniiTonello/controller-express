var express = require('express');
var router = express.Router();
const UserController = require("../controllers.js/UserController");

router.post("/user", (req, res) => UserController.addUser(req, res));

router.get("/user", (req, res) => UserController.getUser(req, res));

router.get("/user/:id", (req, res) => UserController.getUserById(req, res));

router.get("/user/mayorEdad", (req, res) => UserController.getUserMayorEdad(req, res));

router.get("/user/menorEdad", (req, res) => UserController.getUserMenorEdad(req, res));

router.get("/user/mayorEdad/:id", (req, res) => UserController.getUserMayorEdadById(req, res));

router.get("/user/menorEdad/:id", (req, res) => UserController.getUserMenorEdadById(req, res));

module.exports = router;
