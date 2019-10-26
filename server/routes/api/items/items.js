const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Item router test.')
})


module.exports = router;