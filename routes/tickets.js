const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

// this is /tickets/:flightId/new
router.get("/:flightId/new", ticketsCtrl.new)
//this endpoint is req.params.flightId

// this is /tickets/:flightId
router.post("/:flightId", ticketsCtrl.create);





module.exports = router;
