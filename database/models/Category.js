const bookshelf = require('../bookshelf');

class Category extends bookshelf.Model {
    get tableName() {
        return 'categories';
    }
    get hasTimestamps() {
        return true;
    }
};

module.exports = bookshelf.Model('Category', Category);