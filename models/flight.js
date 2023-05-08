const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const flightSchema = new Schema(
  {
    airline: String,
    airport: String,
    flightNo: {
      type: Number,
      min: 10, 
      max: 9999,
    },
    departs: {
        type: Date, 
        default: function () {
            let oneYearFromNow = new Date();
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
            return oneYearFromNow;
        }
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Flight', flightSchema)