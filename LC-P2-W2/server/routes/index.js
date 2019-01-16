var express = require('express');
var router = express.Router();
var userController = require(`../controllers/userController`)
var foodsController = require(`../controllers/foodsController`)
var middlewares = require(`../middlewares/middlewares`)
/* GET home page. */
router.post(`/register`, userController.create)
router.post(`/login`, userController.login)
router.get(`/foods`, middlewares.checkToken, foodsController.findAll)
router.post(`/foods`, middlewares.checkToken, foodsController.update)

module.exports = router;
