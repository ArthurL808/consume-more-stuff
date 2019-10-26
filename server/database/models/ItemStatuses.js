const bookshelf = require("../bookshelf");

class ItemStatuses extends bookshelf.Model {
  get tableName() {
    return "itemStatuses";
  }
  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model("ItemStatuses", ItemStatuses);
