const bookshelf = require('../bookshelf');

class User extends bookshelf.model {
    get tableName() {
        return 'users'
    }
    get hasTimestamps() {
        return true;
    }
    userStatuses() {
        return this.belongsTo('UserStatuses')
    }
}

module.exports = bookshelf.model('User', User);