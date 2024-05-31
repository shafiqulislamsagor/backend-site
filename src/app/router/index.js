const express = require('express');
const FoodRouter = require('../modules/food/food.routes');
const routes = express.Router()

const moduleRouter = [
    {
        path: "/food",
        route: FoodRouter
    }
]
moduleRouter.forEach((route)=> routes.use(route.path,route.route))
module.exports = routes