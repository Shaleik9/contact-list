const Contact = require('../models/contact');

module.exports = {
index,
show,
new: newContact,
create,
edit,
update
};

async function index(req, res) {
  const contacts = await Contact.find({});
  res.render('contacts/index', { contact: 'All Contacts', contacts });
}

async function show(req, res) {
  const contact = await Contact.findById(req.params.id)
  res.render('contacts/show', { title: 'Contact Detail', contact });
}

function newContact(req, res) {
  res.render('contacts/new', { title: 'Add Contact', errorMsg: '' });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Contact.create(req.body);
    res.redirect('/contacts');
  } catch (err) {
    console.log(err);
    res.render('contacts/new', { errorMsg: err.message });
  }
}

async function edit(req, res) {
  const contact = await Contact.findById(req.params.id);
  res.render('contacts/edit', { title: 'Edit Contact', contact });
}

async function update(req, res) {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/contacts/${contact.id}`);
  } catch (err) {
    console.log(err);
    res.render('error', { errorMsg: err.message})
  }
}