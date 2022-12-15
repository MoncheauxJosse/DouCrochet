const express = require("express");
const returnController = require('../controllers/support.controller')
const OrderController = require('../controllers/order.controller')
const {uploadReturn} = require('../middlewares/product.middleware')


const routers = express.Router()

routers.get("/return-product/:id", OrderController.findAllFactureUser);
routers.post("/return-product", [uploadReturn.single('image')], returnController.create);
routers.post("/complaint",returnController.createComplainte);


module.exports = routers