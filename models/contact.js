const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: function(validator) {
      return /\d{3}-\d{3}-\d{4}/.test(validator);
    }
  },
  birthday: {
    type: Date,
    default: function () {
      return new Date().getFullYear();
    },
    min: 1900
  }
});

module.exports = mongoose.model('Contact', contactSchema);