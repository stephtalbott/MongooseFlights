const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

router.get("/", ticketsCtrl.new)
router.post("/:flightId", ticketsCtrl.create);





module.exports = router;
