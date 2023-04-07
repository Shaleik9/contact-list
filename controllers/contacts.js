const Contact = require('../models/contact');
const { create } = require('../models/user');

module.exports = {
index,
show,
new: newContact,
create
}

async function index(req, res) {
  const contacts = await Contact.find({/*user:req.user._id*/});
  res.render('contacts/index', {title: 'All Contacts', contacts });
}

async function show(req, res) {
  const contact = await Contact.findOne({ _id: req.params.id, /*user: req.user._id*/ })
  res.render('contacts/show', {title: 'Contact Detail', contact});
}

function newContact(req, res) {
  res.render('contacts/new', {title: 'Add Contact', errorMsg: '' });
}

// async function create(req, res) {

// }