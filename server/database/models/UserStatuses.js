const bookshelf = require('../bookshelf');

class UserStatuses extends bookshelf.Model{
    get tableName(){
        return 'userStatuses'
    }
    
    get hasTimestamps(){
        return true
    }
}
module.exports = bookshelf.model('UserStatuses', UserStatuses)