const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.User.fetchAll()
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err.message);
    });
});


router.put('/:id', (req,res)=>{
  return req.db.User.forge({id: req.params.id}).save({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    status_id: req.body.status_id
  }).then(results =>{
    res.json(results)
  }).catch(err =>{
    console.log(err.message)
  })
})

router.delete('/:id', (req,res) =>{
  return req.db.User.where({id: req.params.id}).destroy().then(results =>{
    res.json(results)
  }).catch(err =>{
    console.log(err.message)
  })
})

module.exports = router;
