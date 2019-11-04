const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
// const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const api = require('./routes/api/index');
const app = express();

require("dotenv").config();
//
const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) { console.log('No Port Found'); }
if (!SESSION_SECRET) { console.log('No Session Secret Found'); }
if (!REDIS_HOSTNAME) { console.log('No Redis Hostname Found'); }
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) { return process.exit(1); }
//
let client = redis.createClient({ url: process.env.REDIS_HOSTNAME });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(decorator);
app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// function isAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     return res.redirect("/login.html");
//   }
// }
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (email, password, done) {
    return new User({ email: email })
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

passport.serializeUser(function (user, done) {
  console.log("serializing");
  return done(null, { id: user.id, username: user.username });
});

passport.deserializeUser(function (user, done) {
  console.log("deserializing");
  console.log(user);
  return done(null, user);
});

app.use('/api', api.auth)
app.use('/api/items', api.items)
app.use('/api/users', api.users)

app.listen(PORT, () => {
  console.log(`server started on PORT:${PORT}`);
});