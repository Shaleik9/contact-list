const Address = require('../models/address');
const Contact = require('../models/contact');

module.exports = {
  new: newAddress,
  create,
  edit,
  update
}
    
 function newAddress(req, res) {
  res.render('addresses/new', { title: 'Add Address', contactId: req.params.id });
}

async function create(req, res) {
  let contactId = req.params.id
  console.log('testing contact id', contactId);
  req.body.contact = contactId
  console.log('testing req.body', req.body);
  try {
    const address = await Address.create(req.body);
    res.redirect(`/contacts/${contactId}`);

  } catch (err) {
    console.log(err);
    res.render('contacts/new', { errorMsg: err.message });
  }
}

async function edit(req, res) {
  try {
  //const address = await Address.findById(req.params.id);
  const address = await Address.find({ contact: req.params.id });
  res.render('addresses/edit', { title: 'Edit Address', address });
} catch (err) {
  console.log(err);
  res.redirect('/addresses');
 }
}

async function update(req, res) {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/addresses/${address.contact}`);
  } catch (err) {
    console.log(err);
    res.redirect('/addresses');
  }
}