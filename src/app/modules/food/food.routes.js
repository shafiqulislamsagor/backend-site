const express = require('express');
const FoodController = require('./food.controller');
const routes = express.Router()

routes.post('/',FoodController.insertIntoDB)

const FoodRouter = routes
module.exports = FoodRouter