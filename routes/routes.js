const express = require('express');
const router = express.Router();
const { getUserData } = require('../controller/controllers');

router.get('/users', getUserData);
module.exports = router;