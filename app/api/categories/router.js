const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/categories', function(req, res) {
    res.status().json({message: 'Router categories'});
});

module.exports = router;
