const express = require("express");
const router = express.Router();
const upload = require("../../../services/file-upload");
const singleUpload = upload.single("image");

//localhost:8080/api/items
router.get("/", (req, res) => {
  return req.db.Items.fetchAll({
    withRelated: ["user", "category", "itemStatus", "condition"]
  }).then(results => {
    res.send(results.toJSON());
  });
});
router.get("/:id", (req, res) => {
  return req.db.Items.where({ id: req.params.id })
    .fetch({ withRelated: ["user", "category", "itemStatus", "condition"] })
    .then(item => {
      res.json(item);
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(400).send({ message: "Error fetching item." });
    });
});

router.post('/new',singleUpload, (req, res) => {
    console.log(req)
    let newItem = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        manufacturer: req.body.make,
        user_id: 1,
        category_id: req.body.category,
        itemStatus_id: req.body.itemStatus,
        condition_id: req.body.condition
    };
    if(!req.file){
        newItem.imageUrl = 'https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680'
    }else{
        newItem.imageUrl = req.file.location
    }
    return req.db.Items.forge(newItem)
        .save()
        .then(() => {
            res.status(200).json({ message: 'Item posted!' })
        })
        .catch((error) => {
            console.log('Error: ', error);
            res.status(500).json({ message: 'Could not post item.' })
        });
});

router.put("/:id", singleUpload, (req, res) => {
  let newItem = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    manufacturer: req.body.make,
    user_id: 1,
    category_id: req.body.category_id,
    itemStatus_id: req.body.itemStatus_id,
    condition_id: req.body.condition_id
  };
  if (!req.file) {
      newItem.imageUrl = req.body.imageUrl;
} else if(!req.body.imageUrl){
    newItem.imageUrl = req.file.location;
  }else{
      newItem.imageUrl = 'https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680'
  }
  return req.db.Items.forge({ id: req.params.id })
    .save(newItem)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.delete("/:id", (req, res) => {
  return req.db.Items.where({ id: req.params.id })
    .destroy()
    .then(() => {})
    .catch(err => {
      console.log('this is err',err);
    });
});

module.exports = router;
