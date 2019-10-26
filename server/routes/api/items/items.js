const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Item router test.')
});

router.get('/test', (req, res) => {
    return req.db.Item.fetchAll()
        .then((results) => {
            res.send(results.toJSON());
        })
})


module.exports = router;