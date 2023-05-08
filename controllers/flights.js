// import flight model 
const Flight = require('../models/flight')

//define controller functions 
function newFlight(req, res) {
    console.log('the new route has been hit')
    res.render('flights/new')
}

function create(req, res) {



        Flight.create(req.body)
      .then(flightDoc => {
        //   res.send(`Movie Created: ${movieDoc.title}`)

        // return res.redirect(`/flights/${flightDoc.id}`);
        return res.redirect(`/flights/`);
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
  // we're going to use a model method findById
  // findById takes a mongoDb id and finds the appropriate documents
  console.log("these are the req params", req.params);
  Flight.findById(req.params.id)
    .then((flight) => {
      console.log("this is the movie in show", flight);

      // res.send(`found ${movie.title}`)
      res.render("flights/show", { flight: flight });
    })
    .catch((err) => {
      console.log("==========err");
      console.log(err);

      return res.send("err creating, check the terminal");
    });

  // res.send(req.params.id)
}

module.exports = {
    new: newFlight, 
    create, 
    index, 
    show,
}