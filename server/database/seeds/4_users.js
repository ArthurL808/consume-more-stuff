
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        "name": "Dominga",
        "email": "dmcquie0@surveymonkey.com",
        "password": "aVXOlO"
      }, {
        "name": "Dell",
        "email": "dmccafferky1@edublogs.org",
        "password": "FEZnRDJl"
      }, {
        "name": "Eldridge",
        "email": "ewhittet2@1und1.de",
        "password": "OWcqL24"
      }, {
        "name": "Isaak",
        "email": "iyancey3@squidoo.com",
        "password": "ypFccES"
      }, {
        "name": "Leanor",
        "email": "lcracknall4@1688.com",
        "password": "AxgNNs5J"
      }]);
    });
};
