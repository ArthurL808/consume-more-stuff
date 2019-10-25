const bookshelf = require("../bookshelf");

class Conditions extends bookshelf.Model {
  get tableName() {
    return "conditions";
  }

  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model("Conditions", Conditions);
