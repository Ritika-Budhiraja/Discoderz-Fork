const express = require('express');
const { registerGiver } = require('../controllers/giverController');

const router = express.Router();

router.post('/registerGiver', registerGiver)

module.exports = router