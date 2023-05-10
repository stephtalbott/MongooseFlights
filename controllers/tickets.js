const Flight = require("../models/flight");
const Ticket = require("../models/flight")

function create(req, res) {
  Flight.findById(req.params.flightId)
    .then((flightDoc) => {
      flightDoc.tickets.push(req.body);
      return flightDoc.save();
    })
    .then((flightDoc) => {
      res.redirect(`/flights/${flightDoc._id}`);
    })
    .catch((err) => {
      console.log("this is the error in ticket create\n", err);

      res.send(err);
    });
}

function newTicket(req, res) {
  Ticket.find({})
    .then((tickets) => {
      res.render("tickets/new", { tickets: tickets });
    })
    // handle any errors if they occur
    .catch((err) => {
      console.log("error in newTicket", err);

      res.send("error in new ticket check terminal");
    });
}

module.exports = {
  create,
  new: newTicket,
};
