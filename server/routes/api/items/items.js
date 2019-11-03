const express = require('express');
const router = express.Router();
const upload = require('../../../services/file-upload')
const singleUpload = upload.single('image')

//localhost:8080/api/items
router.get('/', (req, res) => {
    return req.db.Items.fetchAll({withRelated: ['user','category','itemStatus','condition']})
        .then((results) => {
            res.send(results.toJSON());
        });
});


router.post('/new',singleUpload, (req, res) => {
    let newItem = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        manufacturer: req.body.manufacturer,
        imageUrl: req.file.location,
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