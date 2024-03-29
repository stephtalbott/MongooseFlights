// import flight model 
const Flight = require('../models/flight')
const Ticket = require("../models/ticket");

//define controller functions 
function newFlight(req, res) {
    const newFlight = new Flight();
    res.render('flights/new')
}

function create(req, res) {
        Flight.create(req.body)
      .then(flightDoc => {
        //   res.send(`Movie Created: ${movieDoc.title}`)

        // return res.redirect(`/flights/${flightDoc.id}`);
        return res.redirect(`/flights/${flightDoc.id}`);
      })
      .catch((err) => {
        console.log("==========err");
        console.log(err);

        return res.send("err creating, check the terminal");
      });

}

function index(req, res) {
    Flight.find({})
        .then(flightDocs => {
            console.log('found all the flights', flightDocs)

            res.render("flights/index", { flights: flightDocs });
        })
        .catch(err => {
            console.log(er)

            return res.send('err creating, check the terminal')
        })
}

function show(req, res) {
  //finding the specific flight
  Flight.findById(req.params.id)
    .then((flightDoc) => {
      console.log(flightDoc)
      // querying the ticket model with this id
      return Ticket.find({flight: flightDoc.id})
        .then((tickets) => {
          return { flight: flightDoc, tickets: tickets };
        })
        .catch((error) => console.error);
    })
     .then((data) => {
        console.log('this is the data obj inside second then of findById', data)
        res.render("flights/show", { flight: data.flight, tickets: data.tickets});
    })
    .catch((err) => {
      console.log("=================err");
      console.log(err);
      console.log("====================");

      return res.send("err finding, check the terminal");
    });

  // res.send(req.params.id)
}

module.exports = {
    new: newFlight, 
    create, 
    index, 
    show,
}