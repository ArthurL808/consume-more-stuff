const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require('../../../database/models/User');

const saltRounds = 12;


router.post(
    "/login",
    passport.authenticate("local"), (req, res) => {
        console.log('Req.user::::::', req.user)
        res.json(req.user)
    });


router.post("/register", (req, res) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            console.log(err);
        } // return 500

        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) {
                console.log(err);
            } // return 500

            return new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                status_id: 1
            })
                .save()
                .then(user => {
                    console.log(user);
                    //change redirect later to login page
                    return res.redirect("/api/users");
                })
                .catch(err => {
                    console.log(err);
                    return res.send("Error creating account");
                });
        });
    });
});

router.post("/logout", (req, res) => {
    req.logout();
    res.send("logged out");
});

module.exports = router;