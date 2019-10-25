
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userStatuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('userStatuses').insert([
        {name: 'active'},
        {name: 'inactive'},
      ]);
    });
};