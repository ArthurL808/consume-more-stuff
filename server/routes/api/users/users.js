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



module.exports = router;
