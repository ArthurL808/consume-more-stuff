const bookshelf = require('../bookshelf');

class Item extends bookshelf.Model {
    get tableName() {
        return 'items';
    }
    get hasTimestamps() {
        return true;
    }
    user() {
        return this.belongsTo('User');
    }
    category() {
        return this.belongsTo('Category');
    }
    itemStatus() {
        return this.belongsTo('ItemStatuses');
    }
    condition() {
        return this.belongsTo('Conditions');
    }
};

module.exports = bookshelf.Model('Item', Item);