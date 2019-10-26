const Category = require("./models/Category");
const Condition = require("./models/Conditions");
const Item = require("./models/Item");
const ItemStatuses = require("./models/ItemStatuses");
const User = require("./models/User");
const UserStatuses = require("./models/UserStatuses");

module.exports = function (req, res, next) {
  req.db = {
    Category,
    Condition,
    Item,
    ItemStatuses,
    User,
    UserStatuses
  };
  next();
};