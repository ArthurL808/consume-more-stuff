const express = require('express');
const router = express.Router();

//localhost:8080/api/items
router.get('/', (req, res) => {
    return req.db.Items.fetchAll()
        .then((items) => {
            res.json(items);
        })
        .catch((error) => {
            console.log('Error: ', error);
            res.status(500).send({ message: 'Error fetching all items.' })
        });
});
router.get('/:id', (req, res) => {
    return req.db.Items.where({ id: req.params.id })
        .fetch()
        .then((item) => {
            res.json(item);
        })
        .catch((error) => {
            console.log('Error: ', error);
            res.status(400).send({ message: 'Error fetching item.' })
        })
})

router.post('/new', (req, res) => {
    let newItem = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        manufacturer: req.body.manufacturer,
        user_id: 1,
        category_id: 1,
        itemStatus_id: 1,
        condition_id: 1
    };
    return req.db.Items.forge(newItem)
        .save()
        .then(() => {
            res.status(200).json({ message: 'Item posted!' })
        })
        .catch((error) => {
            console.log('Error: ', error);
            res.status(500).json({ message: 'Could not ;post item.' })
        });
});

router.put('/edit', (req, res) => {
    let editItem = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        manufacturer: req.body.manufacturer
    };
    return req.db.Items.forge({ user_id: req.body.user_id })
        .save(editItem, { patch: true })
        .then(() => {
            res.status(200).redirect('/api/items');
        })
        .catch((error) => {
            console.log("Error: ", error);
            res.status(500).json({ messgae: 'Could not edit item.' })
        });
});

router.delete('/delete', (req, res) => {
    let itemID = req.body.id;
    let userID = req.body.user_id;
    return req.db.Items.where({ id: itemID, user_id: userID })
        .destroy()
        .then(() => {
            res.status(200).redirect('/api/items');
        })
        .catch((error) => {
            console.log('Error: ', error);
            res.status(500).send({ message: 'Item could not be deleted.' })
        });
});

module.exports = router;