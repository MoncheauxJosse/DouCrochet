const express = require("express");
const routers = express.Router()
const paiementStripe = require("../controllers/paiementStripe.controller.js");



routers.post("/create-checkout-session/:id", paiementStripe.paiementAuto)

module.exports = routers