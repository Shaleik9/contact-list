const express = require('express');
const router = express.Router();

const contactsCtrl = require('../controllers/contacts');


router.get('/', contactsCtrl.index);
router.get('new', contactsCtrl.new);
router.get('/:id', contactsCtrl.show);
router.post('/', contactsCtrl.create);

module.exports = router;