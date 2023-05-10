const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/,
  },
  price: {
    type: Number,
    min: 0,
  }
});

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    arrival: Date,
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema({
    airline: {
      type: String,
    },
    airport: {
      type: String, 
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN',
    },
    flightNo: {
      type: Number,
      min: 10, 
      max: 9999,
      required: true,
    },
    departs: {
        type: Date, 
        validate: (value) => {
            if (value < new Date()) {
                throw new Error('Date must be in the future')
            }
        },
        default: function () {
            let oneYearFromNow = new Date();
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
            return oneYearFromNow;
        }
    },
    destinations: [destinationSchema],
    tickets: [ticketSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
