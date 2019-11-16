const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local");

const User = require('../../../database/models/User');

const saltRounds = 12;

passport.use(
    new LocalStrategy({usernameField: 'email'},
    function (username, password, done) {
      return new User({ email: username })
        .fetch()
        .then(user => {
          console.log("this is the user:", user);
  
          if (user === null) {
            return done(null, false, { message: "bad username or password" });
          } else {
            user = user.toJSON();
  
            bcrypt.compare(password, user.password).then(res => {
              // Happy route: username exists, password matches
              if (res) {
                return done(null, user); //this is the user that goes to serialize
              }
              // Error Route: Username exists, password does not match
              else {
                return done(null, false, { message: "bad username or password" });
              }
            });
          }
        })
        .catch(err => {
          console.log("error: ", err);
          return done(err.message);
        });
    })
  );

router.post(
    "/login",
    passport.authenticate("local"), (req, res) => {
        res.json(req.user)
    });


router.post("/register", (req, res) => {
  console.log(req.body)
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