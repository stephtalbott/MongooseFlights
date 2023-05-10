const Flight = require("../models/flight");
const Ticket = require("../models/ticket")

function create(req, res) {
    Ticket.create(req.body)
        .then((flight) => {
            // res.redirect(`/flights/${flight._id}`);
            res.redirect(`/flights/${req.params.flightId}`);
            // res.redirect('/flights');
            // res.send("hit the create function for ticket");
            })
        .catch((err) => {
            console.log("this is the error in ticket create\n", err);

          res.send(err);
    });
    // console.log('this is req.body in creat ticket', req.body)
    // res.send('hit the create function for ticket')
}

//renders the form 
// /tickets/:flightId/new
function newTicket(req, res) {
  Ticket.find({})
    .then(tickets => {
        console.log('this is req.params.flightId in new ticket', req.params.flightId)
      res.render("tickets/new", { ticket: tickets, flightId: req.params.flightId });
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
