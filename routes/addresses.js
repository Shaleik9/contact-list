const express = require('express');
const router = express.Router();

const addressesCtrl = require('../controllers/addresses');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/contacts/:id/addresses/new', ensureLoggedIn, addressesCtrl.new);
router.post('/contacts/:id/addresses', ensureLoggedIn, addressesCtrl.create);
router.get('/contacts/:id/addresses/edit', ensureLoggedIn, addressesCtrl.edit);
router.put('/contacts/:id', ensureLoggedIn, addressesCtrl.update);

module.exports = router;