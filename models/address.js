const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  street: {
   type: String,
   required: true       
  },
  city: {
   type: String,
   required: true     
  },
  state: {
   type: String,
   required: true   
  },
  country: {
   type: String,
   required: true   
  },
  zip: {
   type: String,
   match: /^\d{5}$/
  },
  contact: {
    type: Schema.Types.ObjectId,
    ref: "Contact"
  }
});

module.exports = mongoose.model('Address', addressSchema);