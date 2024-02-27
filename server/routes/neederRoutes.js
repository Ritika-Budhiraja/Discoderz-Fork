const express = require('express');
const { registerNeederRegistrations, approveNeeder } = require('../controllers/neederController');

const router = express.Router();

router.post('/registerNeeder', registerNeederRegistrations)
router.post('/approverNeeder', approveNeeder)

module.exports = router