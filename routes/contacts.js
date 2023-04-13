const express = require('express');
const router = express.Router();

const contactsCtrl = require('../controllers/contacts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', contactsCtrl.index);
router.get('/new', ensureLoggedIn, contactsCtrl.new);
router.get('/:id', contactsCtrl.show);
router.post('/', ensureLoggedIn, contactsCtrl.create);
router.get('/:id/edit', ensureLoggedIn, contactsCtrl.edit);
router.put('/:id', ensureLoggedIn, contactsCtrl.update);

module.exports = router;