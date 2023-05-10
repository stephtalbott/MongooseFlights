const Flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
  Flight.findById(req.params.id)
  .then((flightDoc) => {
    flightDoc.destinations.push(req.body);

    return flightDoc.save();
  })
  .then((flightDoc) => {
    res.redirect(`/flights/${flightDoc._id}`);
  })
   .catch((err) => {
      console.log("this is the error in destination create\n", err);

      res.send(err);
    });
}
