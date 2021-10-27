const express = require('express');

const {signup, login} = require('../controllers/auth.js')

const router = express.Router();

router.post('/sigup', signup);
router.post('/login', login);

module.exports = router;